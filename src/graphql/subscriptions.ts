// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTrafficIncident = `subscription OnCreateTrafficIncident {
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
export const onUpdateTrafficIncident = `subscription OnUpdateTrafficIncident {
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
export const onDeleteTrafficIncident = `subscription OnDeleteTrafficIncident {
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
export const onCreateApiCall = `subscription OnCreateApiCall {
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
export const onUpdateApiCall = `subscription OnUpdateApiCall {
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
export const onDeleteApiCall = `subscription OnDeleteApiCall {
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
