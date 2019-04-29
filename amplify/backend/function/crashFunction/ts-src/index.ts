/* tslint:disable no-console */
import { Callback, Context, Handler } from 'aws-lambda';
import getJWT from './getJWT';
import getSecrets from './getSecrets';
import queryAPI from './queryApi';


export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
): Promise<void> => {
  const secrets = await getSecrets();

  const crashData = await queryAPI({ apiKey: secrets.API_TOKEN });

  // const user = getJWT(secrets.ACCOUNT_USERNAME);

  

  // console.log(crashData);
  callback();
};
