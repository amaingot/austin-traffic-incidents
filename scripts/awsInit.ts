import { run } from './helper';

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

run(
  `amplify init --amplify ${JSON.stringify(amplify)} --providers ${JSON.stringify(providers)} --yes`
);
