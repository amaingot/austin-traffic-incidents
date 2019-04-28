/* tslint:disable no-console */
import { Callback, Context, Handler } from 'aws-lambda';
import getApiKey from './getApiKey';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
): Promise<void> => {
  console.log('Event: ', event);
  console.log('Context: ', context);

  const secret = await getApiKey();

  console.log(secret);
  callback();
};
