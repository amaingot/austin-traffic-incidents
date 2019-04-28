import * as AWS from 'aws-sdk';

interface AustinDataApiKey {
  API_TOKEN: string;
  API_SECRET: string;
}

const getApiKey = async (): Promise<AustinDataApiKey> => {
  const region = 'us-east-1';
  const secretName = 'prod/AustinData/AustinTrafficIncidentsApp';
  let secret: string = '{}';

  // Create a Secrets Manager client
  const client = new AWS.SecretsManager({
    region,
  });

  const response = client.getSecretValue({ SecretId: secretName }, (err, data) => {
    if (err) {
      if (err.code === 'DecryptionFailureException') {
        // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
        // Deal with the exception here, and/or rethrow at your discretion.
        throw err;
      } else if (err.code === 'InternalServiceErrorException') {
        // An error occurred on the server side.
        // Deal with the exception here, and/or rethrow at your discretion.
        throw err;
      } else if (err.code === 'InvalidParameterException') {
        // You provided an invalid value for a parameter.
        // Deal with the exception here, and/or rethrow at your discretion.
        throw err;
      } else if (err.code === 'InvalidRequestException') {
        // You provided a parameter value that is not valid for the current state of the resource.
        // Deal with the exception here, and/or rethrow at your discretion.
        throw err;
      } else if (err.code === 'ResourceNotFoundException') {
        // We can't find the resource that you asked for.
        // Deal with the exception here, and/or rethrow at your discretion.
        throw err;
      }
    } else {
      // Decrypts secret using the associated KMS CMK.
      // Depending on whether the secret is a string or binary, one of these fields will be populated.
      secret = data.SecretString || '{}';
    }
  });

  await response.promise();

  const parsedSecret = JSON.parse(secret);

  return parsedSecret as AustinDataApiKey;
};

export default getApiKey;
