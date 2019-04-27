import { execSync } from 'child_process';

const env: string = process.env.CIRCLE_BRANCH || 'production';

const amplify = JSON.stringify({
  envName: 'prod',
});

const providers = JSON.stringify({
  awscloudformation: {
    configLevel: 'project',
    useProfile: true,
    profileName: 'default',
  },
});

execSync(
  `amplify init --amplify ${JSON.stringify(amplify)} --providers ${JSON.stringify(providers)} --yes`
);
