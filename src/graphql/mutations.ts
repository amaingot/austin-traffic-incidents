import gql from 'graphql-tag';

export const createTrafficIncident = gql`
  mutation CreateTrafficIncident($input: CreateTrafficIncidentInput!) {
    createTrafficIncident(input: $input) {
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
export const updateTrafficIncident = gql`
  mutation UpdateTrafficIncident($input: UpdateTrafficIncidentInput!) {
    updateTrafficIncident(input: $input) {
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
export const deleteTrafficIncident = gql`
  mutation DeleteTrafficIncident($input: DeleteTrafficIncidentInput!) {
    deleteTrafficIncident(input: $input) {
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
export const createApiCall = gql`
  mutation CreateApiCall($input: CreateAPICallInput!) {
    createAPICall(input: $input) {
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
export const updateApiCall = gql`
  mutation UpdateApiCall($input: UpdateAPICallInput!) {
    updateAPICall(input: $input) {
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
export const deleteApiCall = gql`
  mutation DeleteApiCall($input: DeleteAPICallInput!) {
    deleteAPICall(input: $input) {
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
