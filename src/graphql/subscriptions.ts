import gql from 'graphql-tag';

export const onCreateTrafficIncident = gql`
  subscription OnCreateTrafficIncident {
    onCreateTrafficIncident {
      id
      address
      latitude
      longitude
      published
      createdAt
      issueReported
      trafficReportId
      status
      updatedAt
      apiCall {
        id
        start
        status
        error
        end
        incidents {
          nextToken
        }
        fetchedDateRange {
          start
          end
        }
        callMetadata
        responseMetatadata
      }
    }
  }
`;
export const onUpdateTrafficIncident = gql`
  subscription OnUpdateTrafficIncident {
    onUpdateTrafficIncident {
      id
      address
      latitude
      longitude
      published
      createdAt
      issueReported
      trafficReportId
      status
      updatedAt
      apiCall {
        id
        start
        status
        error
        end
        incidents {
          nextToken
        }
        fetchedDateRange {
          start
          end
        }
        callMetadata
        responseMetatadata
      }
    }
  }
`;
export const onDeleteTrafficIncident = gql`
  subscription OnDeleteTrafficIncident {
    onDeleteTrafficIncident {
      id
      address
      latitude
      longitude
      published
      createdAt
      issueReported
      trafficReportId
      status
      updatedAt
      apiCall {
        id
        start
        status
        error
        end
        incidents {
          nextToken
        }
        fetchedDateRange {
          start
          end
        }
        callMetadata
        responseMetatadata
      }
    }
  }
`;
export const onCreateApiCall = gql`
  subscription OnCreateApiCall {
    onCreateAPICall {
      id
      start
      status
      error
      end
      incidents {
        items {
          id
          address
          latitude
          longitude
          published
          createdAt
          issueReported
          trafficReportId
          status
          updatedAt
        }
        nextToken
      }
      fetchedDateRange {
        start
        end
      }
      callMetadata
      responseMetatadata
    }
  }
`;
export const onUpdateApiCall = gql`
  subscription OnUpdateApiCall {
    onUpdateAPICall {
      id
      start
      status
      error
      end
      incidents {
        items {
          id
          address
          latitude
          longitude
          published
          createdAt
          issueReported
          trafficReportId
          status
          updatedAt
        }
        nextToken
      }
      fetchedDateRange {
        start
        end
      }
      callMetadata
      responseMetatadata
    }
  }
`;
export const onDeleteApiCall = gql`
  subscription OnDeleteApiCall {
    onDeleteAPICall {
      id
      start
      status
      error
      end
      incidents {
        items {
          id
          address
          latitude
          longitude
          published
          createdAt
          issueReported
          trafficReportId
          status
          updatedAt
        }
        nextToken
      }
      fetchedDateRange {
        start
        end
      }
      callMetadata
      responseMetatadata
    }
  }
`;
