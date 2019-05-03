import gql from 'graphql-tag';

export const createIncident = gql`
  mutation CreateIncident($input: CreateIncidentInput!) {
    createIncident(input: $input) {
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
export const updateIncident = gql`
  mutation UpdateIncident($input: UpdateIncidentInput!) {
    updateIncident(input: $input) {
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
export const deleteIncident = gql`
  mutation DeleteIncident($input: DeleteIncidentInput!) {
    deleteIncident(input: $input) {
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
export const createApiCall = gql`
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
  }
`;
export const updateApiCall = gql`
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
  }
`;
export const deleteApiCall = gql`
  mutation DeleteApiCall($input: DeleteAPICallInput!) {
    deleteAPICall(input: $input) {
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
