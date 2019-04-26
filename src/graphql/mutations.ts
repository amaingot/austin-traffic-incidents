// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTrafficIncident = `mutation CreateTrafficIncident($input: CreateTrafficIncidentInput!) {
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
export const updateTrafficIncident = `mutation UpdateTrafficIncident($input: UpdateTrafficIncidentInput!) {
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
export const deleteTrafficIncident = `mutation DeleteTrafficIncident($input: DeleteTrafficIncidentInput!) {
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
export const createApiCall = `mutation CreateApiCall($input: CreateAPICallInput!) {
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
export const updateApiCall = `mutation UpdateApiCall($input: UpdateAPICallInput!) {
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
export const deleteApiCall = `mutation DeleteApiCall($input: DeleteAPICallInput!) {
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
