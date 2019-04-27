/* tslint:disable no-console */
import { execSync } from 'child_process';

const stringify = (o: object) => JSON.stringify(JSON.stringify(o));

const run = (s: string) => {
  try {
    console.log(`Running:\n${s}`);
    // execSync(s);
    console.log('Success!\n');
  } catch (e) {
    console.error(`Failed!\n${e}\n`);
  }
};

const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

const awsCreds = {
  awsAccessKeyId,
  secretAccessKey,
  region,
};

const amplifyConfigPath = '~/.amplify';
const amplifyConfigFile = `${amplifyConfigPath}/configcreds`;

run(`mkdir ${amplifyConfigPath}`);
run(`touch ${amplifyConfigFile}`);
run(`echo ${stringify(awsCreds)} > ${amplifyConfigFile}`);

run('mkdir ~/.aws');

const awsCredFile = `[default]
aws_access_key_id=${awsAccessKeyId}
aws_secret_access_key=${secretAccessKey}
`;

run('touch ~/.aws/credentials');
run(`echo "${awsCredFile}" > ~/.aws/credentials`);

const awsConfigFile = `[default]
region=${region}
`;

run('touch ~/.aws/config');
run(`echo "${awsConfigFile}" > ~/.aws/config`);
