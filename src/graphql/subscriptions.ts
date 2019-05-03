import gql from 'graphql-tag';

export const onCreateIncident = gql`
  subscription OnCreateIncident {
    onCreateIncident {
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
export const onUpdateIncident = gql`
  subscription OnUpdateIncident {
    onUpdateIncident {
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
export const onDeleteIncident = gql`
  subscription OnDeleteIncident {
    onDeleteIncident {
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
export const onCreateApiCall = gql`
  subscription OnCreateApiCall {
    onCreateAPICall {
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
export const onUpdateApiCall = gql`
  subscription OnUpdateApiCall {
    onUpdateAPICall {
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
export const onDeleteApiCall = gql`
  subscription OnDeleteApiCall {
    onDeleteAPICall {
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
