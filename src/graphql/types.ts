/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTrafficIncidentInput = {
  id?: string | null,
  address: string,
  latitude: number,
  longitude: number,
  published: string,
  createdAt: string,
  issueReported?: string | null,
  trafficReportId?: string | null,
  status?: string | null,
  updatedAt: string,
  trafficIncidentApiCallId?: string | null,
};

export enum APICallStatus {
  STARTED = "STARTED",
  PROCESSING = "PROCESSING",
  FINISHED = "FINISHED",
  ERROR = "ERROR",
}


export type UpdateTrafficIncidentInput = {
  id: string,
  address?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  published?: string | null,
  createdAt?: string | null,
  issueReported?: string | null,
  trafficReportId?: string | null,
  status?: string | null,
  updatedAt?: string | null,
  trafficIncidentApiCallId?: string | null,
};

export type DeleteTrafficIncidentInput = {
  id?: string | null,
};

export type CreateAPICallInput = {
  id?: string | null,
  start: string,
  status: APICallStatus,
  error?: string | null,
  end?: string | null,
  fetchedDateRange?: DateRangeInput | null,
  callMetadata?: string | null,
  responseMetatadata?: string | null,
};

export type DateRangeInput = {
  start: string,
  end: string,
};

export type UpdateAPICallInput = {
  id: string,
  start?: string | null,
  status?: APICallStatus | null,
  error?: string | null,
  end?: string | null,
  fetchedDateRange?: DateRangeInput | null,
  callMetadata?: string | null,
  responseMetatadata?: string | null,
};

export type DeleteAPICallInput = {
  id?: string | null,
};

export type ModelTrafficIncidentFilterInput = {
  id?: ModelIDFilterInput | null,
  address?: ModelStringFilterInput | null,
  latitude?: ModelFloatFilterInput | null,
  longitude?: ModelFloatFilterInput | null,
  published?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  issueReported?: ModelStringFilterInput | null,
  trafficReportId?: ModelStringFilterInput | null,
  status?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  and?: Array< ModelTrafficIncidentFilterInput | null > | null,
  or?: Array< ModelTrafficIncidentFilterInput | null > | null,
  not?: ModelTrafficIncidentFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelAPICallFilterInput = {
  id?: ModelIDFilterInput | null,
  start?: ModelStringFilterInput | null,
  status?: ModelAPICallStatusFilterInput | null,
  error?: ModelStringFilterInput | null,
  end?: ModelStringFilterInput | null,
  callMetadata?: ModelStringFilterInput | null,
  responseMetatadata?: ModelStringFilterInput | null,
  and?: Array< ModelAPICallFilterInput | null > | null,
  or?: Array< ModelAPICallFilterInput | null > | null,
  not?: ModelAPICallFilterInput | null,
};

export type ModelAPICallStatusFilterInput = {
  eq?: APICallStatus | null,
  ne?: APICallStatus | null,
};

export type CreateTrafficIncidentMutationVariables = {
  input: CreateTrafficIncidentInput,
};

export type CreateTrafficIncidentMutation = {
  createTrafficIncident:  {
    __typename: "TrafficIncident",
    id: string,
    address: string,
    latitude: number,
    longitude: number,
    published: string,
    createdAt: string,
    issueReported: string | null,
    trafficReportId: string | null,
    status: string | null,
    updatedAt: string,
    apiCall:  {
      __typename: "APICall",
      id: string,
      start: string,
      status: APICallStatus,
      error: string | null,
      end: string | null,
      incidents:  {
        __typename: "ModelTrafficIncidentConnection",
        nextToken: string | null,
      } | null,
      fetchedDateRange:  {
        __typename: "DateRange",
        start: string,
        end: string,
      } | null,
      callMetadata: string | null,
      responseMetatadata: string | null,
    } | null,
  } | null,
};

export type UpdateTrafficIncidentMutationVariables = {
  input: UpdateTrafficIncidentInput,
};

export type UpdateTrafficIncidentMutation = {
  updateTrafficIncident:  {
    __typename: "TrafficIncident",
    id: string,
    address: string,
    latitude: number,
    longitude: number,
    published: string,
    createdAt: string,
    issueReported: string | null,
    trafficReportId: string | null,
    status: string | null,
    updatedAt: string,
    apiCall:  {
      __typename: "APICall",
      id: string,
      start: string,
      status: APICallStatus,
      error: string | null,
      end: string | null,
      incidents:  {
        __typename: "ModelTrafficIncidentConnection",
        nextToken: string | null,
      } | null,
      fetchedDateRange:  {
        __typename: "DateRange",
        start: string,
        end: string,
      } | null,
      callMetadata: string | null,
      responseMetatadata: string | null,
    } | null,
  } | null,
};

export type DeleteTrafficIncidentMutationVariables = {
  input: DeleteTrafficIncidentInput,
};

export type DeleteTrafficIncidentMutation = {
  deleteTrafficIncident:  {
    __typename: "TrafficIncident",
    id: string,
    address: string,
    latitude: number,
    longitude: number,
    published: string,
    createdAt: string,
    issueReported: string | null,
    trafficReportId: string | null,
    status: string | null,
    updatedAt: string,
    apiCall:  {
      __typename: "APICall",
      id: string,
      start: string,
      status: APICallStatus,
      error: string | null,
      end: string | null,
      incidents:  {
        __typename: "ModelTrafficIncidentConnection",
        nextToken: string | null,
      } | null,
      fetchedDateRange:  {
        __typename: "DateRange",
        start: string,
        end: string,
      } | null,
      callMetadata: string | null,
      responseMetatadata: string | null,
    } | null,
  } | null,
};

export type CreateApiCallMutationVariables = {
  input: CreateAPICallInput,
};

export type CreateApiCallMutation = {
  createAPICall:  {
    __typename: "APICall",
    id: string,
    start: string,
    status: APICallStatus,
    error: string | null,
    end: string | null,
    incidents:  {
      __typename: "ModelTrafficIncidentConnection",
      items:  Array< {
        __typename: "TrafficIncident",
        id: string,
        address: string,
        latitude: number,
        longitude: number,
        published: string,
        createdAt: string,
        issueReported: string | null,
        trafficReportId: string | null,
        status: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fetchedDateRange:  {
      __typename: "DateRange",
      start: string,
      end: string,
    } | null,
    callMetadata: string | null,
    responseMetatadata: string | null,
  } | null,
};

export type UpdateApiCallMutationVariables = {
  input: UpdateAPICallInput,
};

export type UpdateApiCallMutation = {
  updateAPICall:  {
    __typename: "APICall",
    id: string,
    start: string,
    status: APICallStatus,
    error: string | null,
    end: string | null,
    incidents:  {
      __typename: "ModelTrafficIncidentConnection",
      items:  Array< {
        __typename: "TrafficIncident",
        id: string,
        address: string,
        latitude: number,
        longitude: number,
        published: string,
        createdAt: string,
        issueReported: string | null,
        trafficReportId: string | null,
        status: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fetchedDateRange:  {
      __typename: "DateRange",
      start: string,
      end: string,
    } | null,
    callMetadata: string | null,
    responseMetatadata: string | null,
  } | null,
};

export type DeleteApiCallMutationVariables = {
  input: DeleteAPICallInput,
};

export type DeleteApiCallMutation = {
  deleteAPICall:  {
    __typename: "APICall",
    id: string,
    start: string,
    status: APICallStatus,
    error: string | null,
    end: string | null,
    incidents:  {
      __typename: "ModelTrafficIncidentConnection",
      items:  Array< {
        __typename: "TrafficIncident",
        id: string,
        address: string,
        latitude: number,
        longitude: number,
        published: string,
        createdAt: string,
        issueReported: string | null,
        trafficReportId: string | null,
        status: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fetchedDateRange:  {
      __typename: "DateRange",
      start: string,
      end: string,
    } | null,
    callMetadata: string | null,
    responseMetatadata: string | null,
  } | null,
};

export type GetTrafficIncidentQueryVariables = {
  id: string,
};

export type GetTrafficIncidentQuery = {
  getTrafficIncident:  {
    __typename: "TrafficIncident",
    id: string,
    address: string,
    latitude: number,
    longitude: number,
    published: string,
    createdAt: string,
    issueReported: string | null,
    trafficReportId: string | null,
    status: string | null,
    updatedAt: string,
    apiCall:  {
      __typename: "APICall",
      id: string,
      start: string,
      status: APICallStatus,
      error: string | null,
      end: string | null,
      incidents:  {
        __typename: "ModelTrafficIncidentConnection",
        nextToken: string | null,
      } | null,
      fetchedDateRange:  {
        __typename: "DateRange",
        start: string,
        end: string,
      } | null,
      callMetadata: string | null,
      responseMetatadata: string | null,
    } | null,
  } | null,
};

export type ListTrafficIncidentsQueryVariables = {
  filter?: ModelTrafficIncidentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTrafficIncidentsQuery = {
  listTrafficIncidents:  {
    __typename: "ModelTrafficIncidentConnection",
    items:  Array< {
      __typename: "TrafficIncident",
      id: string,
      address: string,
      latitude: number,
      longitude: number,
      published: string,
      createdAt: string,
      issueReported: string | null,
      trafficReportId: string | null,
      status: string | null,
      updatedAt: string,
      apiCall:  {
        __typename: "APICall",
        id: string,
        start: string,
        status: APICallStatus,
        error: string | null,
        end: string | null,
        callMetadata: string | null,
        responseMetatadata: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetApiCallQueryVariables = {
  id: string,
};

export type GetApiCallQuery = {
  getAPICall:  {
    __typename: "APICall",
    id: string,
    start: string,
    status: APICallStatus,
    error: string | null,
    end: string | null,
    incidents:  {
      __typename: "ModelTrafficIncidentConnection",
      items:  Array< {
        __typename: "TrafficIncident",
        id: string,
        address: string,
        latitude: number,
        longitude: number,
        published: string,
        createdAt: string,
        issueReported: string | null,
        trafficReportId: string | null,
        status: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fetchedDateRange:  {
      __typename: "DateRange",
      start: string,
      end: string,
    } | null,
    callMetadata: string | null,
    responseMetatadata: string | null,
  } | null,
};

export type ListApiCallsQueryVariables = {
  filter?: ModelAPICallFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApiCallsQuery = {
  listAPICalls:  {
    __typename: "ModelAPICallConnection",
    items:  Array< {
      __typename: "APICall",
      id: string,
      start: string,
      status: APICallStatus,
      error: string | null,
      end: string | null,
      incidents:  {
        __typename: "ModelTrafficIncidentConnection",
        nextToken: string | null,
      } | null,
      fetchedDateRange:  {
        __typename: "DateRange",
        start: string,
        end: string,
      } | null,
      callMetadata: string | null,
      responseMetatadata: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTrafficIncidentSubscription = {
  onCreateTrafficIncident:  {
    __typename: "TrafficIncident",
    id: string,
    address: string,
    latitude: number,
    longitude: number,
    published: string,
    createdAt: string,
    issueReported: string | null,
    trafficReportId: string | null,
    status: string | null,
    updatedAt: string,
    apiCall:  {
      __typename: "APICall",
      id: string,
      start: string,
      status: APICallStatus,
      error: string | null,
      end: string | null,
      incidents:  {
        __typename: "ModelTrafficIncidentConnection",
        nextToken: string | null,
      } | null,
      fetchedDateRange:  {
        __typename: "DateRange",
        start: string,
        end: string,
      } | null,
      callMetadata: string | null,
      responseMetatadata: string | null,
    } | null,
  } | null,
};

export type OnUpdateTrafficIncidentSubscription = {
  onUpdateTrafficIncident:  {
    __typename: "TrafficIncident",
    id: string,
    address: string,
    latitude: number,
    longitude: number,
    published: string,
    createdAt: string,
    issueReported: string | null,
    trafficReportId: string | null,
    status: string | null,
    updatedAt: string,
    apiCall:  {
      __typename: "APICall",
      id: string,
      start: string,
      status: APICallStatus,
      error: string | null,
      end: string | null,
      incidents:  {
        __typename: "ModelTrafficIncidentConnection",
        nextToken: string | null,
      } | null,
      fetchedDateRange:  {
        __typename: "DateRange",
        start: string,
        end: string,
      } | null,
      callMetadata: string | null,
      responseMetatadata: string | null,
    } | null,
  } | null,
};

export type OnDeleteTrafficIncidentSubscription = {
  onDeleteTrafficIncident:  {
    __typename: "TrafficIncident",
    id: string,
    address: string,
    latitude: number,
    longitude: number,
    published: string,
    createdAt: string,
    issueReported: string | null,
    trafficReportId: string | null,
    status: string | null,
    updatedAt: string,
    apiCall:  {
      __typename: "APICall",
      id: string,
      start: string,
      status: APICallStatus,
      error: string | null,
      end: string | null,
      incidents:  {
        __typename: "ModelTrafficIncidentConnection",
        nextToken: string | null,
      } | null,
      fetchedDateRange:  {
        __typename: "DateRange",
        start: string,
        end: string,
      } | null,
      callMetadata: string | null,
      responseMetatadata: string | null,
    } | null,
  } | null,
};

export type OnCreateApiCallSubscription = {
  onCreateAPICall:  {
    __typename: "APICall",
    id: string,
    start: string,
    status: APICallStatus,
    error: string | null,
    end: string | null,
    incidents:  {
      __typename: "ModelTrafficIncidentConnection",
      items:  Array< {
        __typename: "TrafficIncident",
        id: string,
        address: string,
        latitude: number,
        longitude: number,
        published: string,
        createdAt: string,
        issueReported: string | null,
        trafficReportId: string | null,
        status: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fetchedDateRange:  {
      __typename: "DateRange",
      start: string,
      end: string,
    } | null,
    callMetadata: string | null,
    responseMetatadata: string | null,
  } | null,
};

export type OnUpdateApiCallSubscription = {
  onUpdateAPICall:  {
    __typename: "APICall",
    id: string,
    start: string,
    status: APICallStatus,
    error: string | null,
    end: string | null,
    incidents:  {
      __typename: "ModelTrafficIncidentConnection",
      items:  Array< {
        __typename: "TrafficIncident",
        id: string,
        address: string,
        latitude: number,
        longitude: number,
        published: string,
        createdAt: string,
        issueReported: string | null,
        trafficReportId: string | null,
        status: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fetchedDateRange:  {
      __typename: "DateRange",
      start: string,
      end: string,
    } | null,
    callMetadata: string | null,
    responseMetatadata: string | null,
  } | null,
};

export type OnDeleteApiCallSubscription = {
  onDeleteAPICall:  {
    __typename: "APICall",
    id: string,
    start: string,
    status: APICallStatus,
    error: string | null,
    end: string | null,
    incidents:  {
      __typename: "ModelTrafficIncidentConnection",
      items:  Array< {
        __typename: "TrafficIncident",
        id: string,
        address: string,
        latitude: number,
        longitude: number,
        published: string,
        createdAt: string,
        issueReported: string | null,
        trafficReportId: string | null,
        status: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fetchedDateRange:  {
      __typename: "DateRange",
      start: string,
      end: string,
    } | null,
    callMetadata: string | null,
    responseMetatadata: string | null,
  } | null,
};
