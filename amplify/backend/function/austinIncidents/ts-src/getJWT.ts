/* tslint:disable no-console */
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

const getJWT = async (username: string, password: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const authData = {
      Username: username,
      Password: password,
    };
    const authDetails = new AmazonCognitoIdentity.AuthenticationDetails(authData);

    const poolData = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      ClientId: process.env.COGNITO_CLIENT_ID,
    };
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const userData = {
      Username: authData.Username,
      Pool: userPool,
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    let accessToken: string;

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: result => {
        accessToken = result.getAccessToken().getJwtToken();
        resolve(accessToken);
      },
      onFailure: error => {
        console.error(JSON.stringify(error));
        reject(error);
      },
    });
  });
};

export default getJWT;
