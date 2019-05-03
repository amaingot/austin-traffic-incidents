import gql from 'graphql-tag';

export const getIncident = gql`
  query GetIncident($id: ID!) {
    getIncident(id: $id) {
      id
      address
      latitude
      longitude
      issueReported
      trafficReportId
      status
      published
      createdAt
      updatedAt
    }
  }
`;
export const listIncidents = gql`
  query ListIncidents($filter: ModelIncidentFilterInput, $limit: Int, $nextToken: String) {
    listIncidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`;
export const getApiCall = gql`
  query GetApiCall($id: ID!) {
    getAPICall(id: $id) {
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
  }
`;
export const listApiCalls = gql`
  query ListApiCalls($filter: ModelAPICallFilterInput, $limit: Int, $nextToken: String) {
    listAPICalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`;
