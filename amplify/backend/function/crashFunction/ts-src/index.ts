/* tslint:disable no-console */
import { Callback, Context, Handler } from 'aws-lambda';
import getApiKey from './getApiKey';
import queryAPI from './queryApi';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
): Promise<void> => {
  const token = await getApiKey();

  const crashData = await queryAPI({ apiKey: token.API_TOKEN });
  console.log(crashData);
  callback();
};
