/* tslint:disable no-console */
import { execSync } from 'child_process';

export const stringify = (o: object) => JSON.stringify(JSON.stringify(o));

export const run = (s: string) => {
  try {
    console.log(`Running:\n${s}`);
    execSync(s);
    console.log('Success!\n');
  } catch (e) {
    console.error(`Failed!\n${e}\n`);
  }
};
