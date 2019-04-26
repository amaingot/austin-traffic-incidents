import gql from 'graphql-tag';

export const getTrafficIncident = gql`
  query GetTrafficIncident($id: ID!) {
    getTrafficIncident(id: $id) {
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
export const listTrafficIncidents = gql`
  query ListTrafficIncidents(
    $filter: ModelTrafficIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrafficIncidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        apiCall {
          id
          start
          status
          error
          end
          callMetadata
          responseMetatadata
        }
      }
      nextToken
    }
  }
`;
export const getApiCall = gql`
  query GetApiCall($id: ID!) {
    getAPICall(id: $id) {
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
export const listApiCalls = gql`
  query ListApiCalls($filter: ModelAPICallFilterInput, $limit: Int, $nextToken: String) {
    listAPICalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
