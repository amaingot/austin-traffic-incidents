/* tslint:disable no-console */
import { Callback, Context, Handler } from 'aws-lambda';
import getJWT from './getJWT';
import getSecret from './getSecret';
import GraphQLClient from './GraphqlClient';
import queryAPI from './queryApi';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
): Promise<void> => {
  // Get local environment varialbes if not in prod
  if (process.env.ENV !== 'prod') {
    /* tslint:disable-next-line no-var-requires */
    const dotenv = require('dotenv');
    const result = dotenv.config();

    if (result.error) {
      console.log(result.error);
    }
  }

  const secret = await getSecret();
  console.log(secret);

  const client = new GraphQLClient(secret);

  const crashData = await queryAPI({ apiKey: secret.API_TOKEN }, client);

  const jwtToken = await getJWT(secret.ACCOUNT_USERNAME, secret.ACCOUNT_PASSWORD);

  console.log(jwtToken);
  callback();
};
