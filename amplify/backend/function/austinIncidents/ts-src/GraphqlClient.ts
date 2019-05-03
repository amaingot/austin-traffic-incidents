/* tslint:disable no-console */
import axios from 'axios';
import { Moment } from 'moment';
import moment = require('moment');
import getJWT from './getJWT';
import { APICallStatus, CreateApiCallMutation, UpdateApiCallMutation } from './types';

export default class GraphQLClient {
  private jwtPromise: Promise<string>;
  private jwt: string = undefined;
  private endpoint: string;
  private currentApiCallId: string = undefined;

  constructor(args: { ACCOUNT_PASSWORD: string; ACCOUNT_USERNAME: string }) {
    this.jwtPromise = getJWT(args.ACCOUNT_USERNAME, args.ACCOUNT_USERNAME);
    this.jwtPromise.then(jwt => {
      this.jwt = jwt;
    });

    this.endpoint = process.env.GRAPHQL_API_URL;
  }

  private async waitForJWT() {
    if (this.jwt === undefined) {
      await this.jwtPromise;
    }
  }

  public async startApiCall(start: Moment, end: Moment, metadata: string) {
    await this.waitForJWT();

    const queryStart = start.format('YYYY-MM-DDThh:mm:ss.sssZ');
    const queryEnd = end.format('YYYY-MM-DDThh:mm:ss.sssZ');

    try {
      const response = await axios.post<CreateApiCallMutation>(this.endpoint, {
        headers: {
          Authorization: this.jwt,
          'Content-Type': 'application/json',
        },
        body: {
          query: `
            mutation CreateApiCall($input: CreateAPICallInput!) {
              createAPICall(input: $input) {
                id
                callStart
                callEnd
                status
                error
                queryStart
                queryEnd
                callMetadata
                responseMetatadata
              }
            }`,
          variables: {
            input: {
              callStart: moment().format('YYYY-MM-DDThh:mm:ss.sssZ'),
              queryStart,
              queryEnd,
              callMetadata: metadata,
              status: 'STARTED',
            },
          },
        },
      });

      const { data } = response;
      this.currentApiCallId = data.createAPICall.id;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  private async updateApiCall(metadata: string, status: APICallStatus) {
    await this.waitForJWT();

    try {
      const response = await axios.post<UpdateApiCallMutation>(this.endpoint, {
        headers: {
          Authorization: this.jwt,
          'Content-Type': 'application/json',
        },
        body: {
          query: `
            mutation UpdateApiCall($input: UpdateAPICallInput!) {
              updateAPICall(input: $input) {
                id
                callStart
                callEnd
                status
                error
                queryStart
                queryEnd
                callMetadata
                responseMetatadata
              }
            }`,
          variables: {
            input: {
              id: this.currentApiCallId,
              callEnd: moment().format('YYYY-MM-DDThh:mm:ss.sssZ'),
              responseMetatadata: metadata,
              status,
            },
          },
        },
      });

      this.currentApiCallId = undefined;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public async apiCallSuccess(metadata: string) {
    await this.updateApiCall(metadata, APICallStatus.FINISHED);
  }

  public async apiCallError(metadata: string) {
    await this.updateApiCall(metadata, APICallStatus.ERROR);
  }
}
