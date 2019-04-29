import * as AWS from 'aws-sdk';

const getJWT = async (username: string) => {
  const cognito = new AWS.CognitoIdentityServiceProvider();

  try {
    const user = await cognito
      .adminGetUser({
        UserPoolId: process.env.USER_POOL_ID || 'us-east-1_39dpy7cg6',
        Username: username,
      })
      .promise();

    const auth = await cognito
      .adminInitiateAuth({
        AuthFlow: 'ADMIN_NO_SRP_AUTH',
        UserPoolId: process.env.USER_POOL_ID || 'us-east-1_39dpy7cg6',
        ClientId: process.env.APP_CLIENT_ID || '47nivmqlndmdbadp3ns0ekmb5m',
      })
      .promise();

    console.log(auth);
    console.log(user);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getJWT;
