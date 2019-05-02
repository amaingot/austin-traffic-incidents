import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

import awsconfig from 'src/aws-exports';
import Main from './Main';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
  // Uses Amazon IAM credentials to authorize requests to S3.
  complexObjectsCredentials: async () => Auth.currentCredentials(),
});

const AuthedMain = withAuthenticator(Main);

ReactDOM.render(
  <ApolloProvider client={client as any}>
    <Rehydrated>
      <AuthedMain />
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById('root')
);
