import { run, stringify } from './helper';

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

run(`mkdir ${amplifyConfigPath}`, `Making the amplify config directory: ${amplifyConfigPath}`);
run(`touch ${amplifyConfigFile}`, `Creating the amplify config file: ${amplifyConfigFile}`);
run(`echo ${stringify(awsCreds)} > ${amplifyConfigFile}`, 'Writing config to amplify config file');

run('mkdir ~/.aws', 'Making the aws config folder');

const awsCredFile = `[default]
aws_access_key_id=${awsAccessKeyId}
aws_secret_access_key=${secretAccessKey}
`;

run('touch ~/.aws/credentials', 'Creating the aws credentials file');
run(`echo "${awsCredFile}" > ~/.aws/credentials`, 'Writing aws creds to the file');

const awsConfigFile = `[default]
region=${region}
`;

run('touch ~/.aws/config', 'Creating the aws config file');
run(`echo "${awsConfigFile}" > ~/.aws/config`, 'Writing aws config to the file');
