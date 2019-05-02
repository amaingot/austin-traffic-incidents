/* tslint:disable no-console */
import * as AWS from 'aws-sdk';
import { execSync } from 'child_process';
import { createReadStream } from 'fs';
import { basename } from 'path';

export const stringify = (o: object) => JSON.stringify(JSON.stringify(o));

export const run = (s: string, c: string = '') => {
  try {
    console.log(`Running:\n${c}`);
    execSync(s);
    console.log('Success!\n');
  } catch (e) {
    console.error(`Failed!\n${c}\n`);
  }
};

export const uploadFile = (fileName: string) => {
  const cloudfront = new AWS.CloudFront();
  const s3 = new AWS.S3();
  const time = new Date();

  const frontEndEnv = process.env.CIRCLE_BRANCH || 'production';
  const commitSha = process.env.CIRCLE_SHA1;
  const distId = process.env.CDN_DIST_ID;
  const bucket = process.env.S3_BUCKET;

  const bundleFileStream = createReadStream(fileName);
  const key = basename(fileName);

  bundleFileStream.on('error', err => {
    console.error('File Error', err);
  });

  const uploadParams = {
    ACL: 'public-read',
    Body: bundleFileStream,
    Bucket: bucket,
    Key: `${frontEndEnv}/${key}`,
  };

  const invalidationParams = {
    DistributionId: distId,
    InvalidationBatch: {
      Paths: {
        Quantity: 1,
        Items: [`/${frontEndEnv}/*`],
      },
      CallerReference: `CI-${commitSha}-${time.toDateString()}-${time.toTimeString()}`,
    },
  };

  s3.putObject(uploadParams, (s3Error, s3Data) => {
    if (s3Error) {
      console.error(s3Error, s3Error.stack);
    } else {
      console.log(s3Data);
      cloudfront.createInvalidation(invalidationParams, (cfError, cfData) => {
        if (cfError) {
          console.error(cfError, cfError.stack);
        } else {
          console.log(cfData);
        }
      });
    }
  });
};
