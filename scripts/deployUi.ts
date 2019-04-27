import { run, stringify } from './helper';

const frontEndEnv = process.env.CIRCLE_BRANCH || 'production';
const commitSha = process.env.CIRCLE_SHA1;
const time = new Date();
const distId = process.env.CDN_DIST_ID;

const batchConfig = {
  Paths: {
    Quantity: 1,
    Items: [`/${frontEndEnv}/*`],
  },
  CallerReference: `CI-${commitSha}-${time.toTimeString()}`,
};

run(
  `aws cloudfront create-invalidation --invalidation-batch ${stringify(
    batchConfig
  )} --distribution-id ${distId}`
);
