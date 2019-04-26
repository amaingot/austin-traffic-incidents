export interface CreateTrafficIncidentInput {
  id?: string | null;
  address: string;
  latitude: number;
  longitude: number;
  published: string;
  createdAt: string;
  issueReported?: string | null;
  trafficReportId?: string | null;
  status?: string | null;
  updatedAt: string;
  trafficIncidentApiCallId?: string | null;
}

export enum APICallStatus {
  STARTED = 'STARTED',
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
}

export interface UpdateTrafficIncidentInput {
  id: string;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  published?: string | null;
  createdAt?: string | null;
  issueReported?: string | null;
  trafficReportId?: string | null;
  status?: string | null;
  updatedAt?: string | null;
  trafficIncidentApiCallId?: string | null;
}

export interface DeleteTrafficIncidentInput {
  id?: string | null;
}

export interface CreateAPICallInput {
  id?: string | null;
  start: string;
  status: APICallStatus;
  error?: string | null;
  end?: string | null;
  fetchedDateRange?: DateRangeInput | null;
  callMetadata?: string | null;
  responseMetatadata?: string | null;
}

export interface DateRangeInput {
  start: string;
  end: string;
}

export interface UpdateAPICallInput {
  id: string;
  start?: string | null;
  status?: APICallStatus | null;
  error?: string | null;
  end?: string | null;
  fetchedDateRange?: DateRangeInput | null;
  callMetadata?: string | null;
  responseMetatadata?: string | null;
}

export interface DeleteAPICallInput {
  id?: string | null;
}

export interface ModelTrafficIncidentFilterInput {
  id?: ModelIDFilterInput | null;
  address?: ModelStringFilterInput | null;
  latitude?: ModelFloatFilterInput | null;
  longitude?: ModelFloatFilterInput | null;
  published?: ModelStringFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  issueReported?: ModelStringFilterInput | null;
  trafficReportId?: ModelStringFilterInput | null;
  status?: ModelStringFilterInput | null;
  updatedAt?: ModelStringFilterInput | null;
  and?: Array<ModelTrafficIncidentFilterInput | null> | null;
  or?: Array<ModelTrafficIncidentFilterInput | null> | null;
  not?: ModelTrafficIncidentFilterInput | null;
}

export interface ModelIDFilterInput {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
}

export interface ModelStringFilterInput {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
}

export interface ModelFloatFilterInput {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
}

export interface ModelAPICallFilterInput {
  id?: ModelIDFilterInput | null;
  start?: ModelStringFilterInput | null;
  status?: ModelAPICallStatusFilterInput | null;
  error?: ModelStringFilterInput | null;
  end?: ModelStringFilterInput | null;
  callMetadata?: ModelStringFilterInput | null;
  responseMetatadata?: ModelStringFilterInput | null;
  and?: Array<ModelAPICallFilterInput | null> | null;
  or?: Array<ModelAPICallFilterInput | null> | null;
  not?: ModelAPICallFilterInput | null;
}

export interface ModelAPICallStatusFilterInput {
  eq?: APICallStatus | null;
  ne?: APICallStatus | null;
}

export interface CreateTrafficIncidentMutationVariables {
  input: CreateTrafficIncidentInput;
}

export interface CreateTrafficIncidentMutation {
  createTrafficIncident: {
    __typename: 'TrafficIncident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    published: string;
    createdAt: string;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    updatedAt: string;
    apiCall: {
      __typename: 'APICall';
      id: string;
      start: string;
      status: APICallStatus;
      error: string | null;
      end: string | null;
      incidents: {
        __typename: 'ModelTrafficIncidentConnection';
        nextToken: string | null;
      } | null;
      fetchedDateRange: {
        __typename: 'DateRange';
        start: string;
        end: string;
      } | null;
      callMetadata: string | null;
      responseMetatadata: string | null;
    } | null;
  } | null;
}

export interface UpdateTrafficIncidentMutationVariables {
  input: UpdateTrafficIncidentInput;
}

export interface UpdateTrafficIncidentMutation {
  updateTrafficIncident: {
    __typename: 'TrafficIncident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    published: string;
    createdAt: string;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    updatedAt: string;
    apiCall: {
      __typename: 'APICall';
      id: string;
      start: string;
      status: APICallStatus;
      error: string | null;
      end: string | null;
      incidents: {
        __typename: 'ModelTrafficIncidentConnection';
        nextToken: string | null;
      } | null;
      fetchedDateRange: {
        __typename: 'DateRange';
        start: string;
        end: string;
      } | null;
      callMetadata: string | null;
      responseMetatadata: string | null;
    } | null;
  } | null;
}

export interface DeleteTrafficIncidentMutationVariables {
  input: DeleteTrafficIncidentInput;
}

export interface DeleteTrafficIncidentMutation {
  deleteTrafficIncident: {
    __typename: 'TrafficIncident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    published: string;
    createdAt: string;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    updatedAt: string;
    apiCall: {
      __typename: 'APICall';
      id: string;
      start: string;
      status: APICallStatus;
      error: string | null;
      end: string | null;
      incidents: {
        __typename: 'ModelTrafficIncidentConnection';
        nextToken: string | null;
      } | null;
      fetchedDateRange: {
        __typename: 'DateRange';
        start: string;
        end: string;
      } | null;
      callMetadata: string | null;
      responseMetatadata: string | null;
    } | null;
  } | null;
}

export interface CreateApiCallMutationVariables {
  input: CreateAPICallInput;
}

export interface CreateApiCallMutation {
  createAPICall: {
    __typename: 'APICall';
    id: string;
    start: string;
    status: APICallStatus;
    error: string | null;
    end: string | null;
    incidents: {
      __typename: 'ModelTrafficIncidentConnection';
      items: Array<{
        __typename: 'TrafficIncident';
        id: string;
        address: string;
        latitude: number;
        longitude: number;
        published: string;
        createdAt: string;
        issueReported: string | null;
        trafficReportId: string | null;
        status: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    fetchedDateRange: {
      __typename: 'DateRange';
      start: string;
      end: string;
    } | null;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface UpdateApiCallMutationVariables {
  input: UpdateAPICallInput;
}

export interface UpdateApiCallMutation {
  updateAPICall: {
    __typename: 'APICall';
    id: string;
    start: string;
    status: APICallStatus;
    error: string | null;
    end: string | null;
    incidents: {
      __typename: 'ModelTrafficIncidentConnection';
      items: Array<{
        __typename: 'TrafficIncident';
        id: string;
        address: string;
        latitude: number;
        longitude: number;
        published: string;
        createdAt: string;
        issueReported: string | null;
        trafficReportId: string | null;
        status: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    fetchedDateRange: {
      __typename: 'DateRange';
      start: string;
      end: string;
    } | null;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface DeleteApiCallMutationVariables {
  input: DeleteAPICallInput;
}

export interface DeleteApiCallMutation {
  deleteAPICall: {
    __typename: 'APICall';
    id: string;
    start: string;
    status: APICallStatus;
    error: string | null;
    end: string | null;
    incidents: {
      __typename: 'ModelTrafficIncidentConnection';
      items: Array<{
        __typename: 'TrafficIncident';
        id: string;
        address: string;
        latitude: number;
        longitude: number;
        published: string;
        createdAt: string;
        issueReported: string | null;
        trafficReportId: string | null;
        status: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    fetchedDateRange: {
      __typename: 'DateRange';
      start: string;
      end: string;
    } | null;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface GetTrafficIncidentQueryVariables {
  id: string;
}

export interface GetTrafficIncidentQuery {
  getTrafficIncident: {
    __typename: 'TrafficIncident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    published: string;
    createdAt: string;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    updatedAt: string;
    apiCall: {
      __typename: 'APICall';
      id: string;
      start: string;
      status: APICallStatus;
      error: string | null;
      end: string | null;
      incidents: {
        __typename: 'ModelTrafficIncidentConnection';
        nextToken: string | null;
      } | null;
      fetchedDateRange: {
        __typename: 'DateRange';
        start: string;
        end: string;
      } | null;
      callMetadata: string | null;
      responseMetatadata: string | null;
    } | null;
  } | null;
}

export interface ListTrafficIncidentsQueryVariables {
  filter?: ModelTrafficIncidentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListTrafficIncidentsQuery {
  listTrafficIncidents: {
    __typename: 'ModelTrafficIncidentConnection';
    items: Array<{
      __typename: 'TrafficIncident';
      id: string;
      address: string;
      latitude: number;
      longitude: number;
      published: string;
      createdAt: string;
      issueReported: string | null;
      trafficReportId: string | null;
      status: string | null;
      updatedAt: string;
      apiCall: {
        __typename: 'APICall';
        id: string;
        start: string;
        status: APICallStatus;
        error: string | null;
        end: string | null;
        callMetadata: string | null;
        responseMetatadata: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
}

export interface GetApiCallQueryVariables {
  id: string;
}

export interface GetApiCallQuery {
  getAPICall: {
    __typename: 'APICall';
    id: string;
    start: string;
    status: APICallStatus;
    error: string | null;
    end: string | null;
    incidents: {
      __typename: 'ModelTrafficIncidentConnection';
      items: Array<{
        __typename: 'TrafficIncident';
        id: string;
        address: string;
        latitude: number;
        longitude: number;
        published: string;
        createdAt: string;
        issueReported: string | null;
        trafficReportId: string | null;
        status: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    fetchedDateRange: {
      __typename: 'DateRange';
      start: string;
      end: string;
    } | null;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface ListApiCallsQueryVariables {
  filter?: ModelAPICallFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListApiCallsQuery {
  listAPICalls: {
    __typename: 'ModelAPICallConnection';
    items: Array<{
      __typename: 'APICall';
      id: string;
      start: string;
      status: APICallStatus;
      error: string | null;
      end: string | null;
      incidents: {
        __typename: 'ModelTrafficIncidentConnection';
        nextToken: string | null;
      } | null;
      fetchedDateRange: {
        __typename: 'DateRange';
        start: string;
        end: string;
      } | null;
      callMetadata: string | null;
      responseMetatadata: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
}

export interface OnCreateTrafficIncidentSubscription {
  onCreateTrafficIncident: {
    __typename: 'TrafficIncident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    published: string;
    createdAt: string;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    updatedAt: string;
    apiCall: {
      __typename: 'APICall';
      id: string;
      start: string;
      status: APICallStatus;
      error: string | null;
      end: string | null;
      incidents: {
        __typename: 'ModelTrafficIncidentConnection';
        nextToken: string | null;
      } | null;
      fetchedDateRange: {
        __typename: 'DateRange';
        start: string;
        end: string;
      } | null;
      callMetadata: string | null;
      responseMetatadata: string | null;
    } | null;
  } | null;
}

export interface OnUpdateTrafficIncidentSubscription {
  onUpdateTrafficIncident: {
    __typename: 'TrafficIncident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    published: string;
    createdAt: string;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    updatedAt: string;
    apiCall: {
      __typename: 'APICall';
      id: string;
      start: string;
      status: APICallStatus;
      error: string | null;
      end: string | null;
      incidents: {
        __typename: 'ModelTrafficIncidentConnection';
        nextToken: string | null;
      } | null;
      fetchedDateRange: {
        __typename: 'DateRange';
        start: string;
        end: string;
      } | null;
      callMetadata: string | null;
      responseMetatadata: string | null;
    } | null;
  } | null;
}

export interface OnDeleteTrafficIncidentSubscription {
  onDeleteTrafficIncident: {
    __typename: 'TrafficIncident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    published: string;
    createdAt: string;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    updatedAt: string;
    apiCall: {
      __typename: 'APICall';
      id: string;
      start: string;
      status: APICallStatus;
      error: string | null;
      end: string | null;
      incidents: {
        __typename: 'ModelTrafficIncidentConnection';
        nextToken: string | null;
      } | null;
      fetchedDateRange: {
        __typename: 'DateRange';
        start: string;
        end: string;
      } | null;
      callMetadata: string | null;
      responseMetatadata: string | null;
    } | null;
  } | null;
}

export interface OnCreateApiCallSubscription {
  onCreateAPICall: {
    __typename: 'APICall';
    id: string;
    start: string;
    status: APICallStatus;
    error: string | null;
    end: string | null;
    incidents: {
      __typename: 'ModelTrafficIncidentConnection';
      items: Array<{
        __typename: 'TrafficIncident';
        id: string;
        address: string;
        latitude: number;
        longitude: number;
        published: string;
        createdAt: string;
        issueReported: string | null;
        trafficReportId: string | null;
        status: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    fetchedDateRange: {
      __typename: 'DateRange';
      start: string;
      end: string;
    } | null;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface OnUpdateApiCallSubscription {
  onUpdateAPICall: {
    __typename: 'APICall';
    id: string;
    start: string;
    status: APICallStatus;
    error: string | null;
    end: string | null;
    incidents: {
      __typename: 'ModelTrafficIncidentConnection';
      items: Array<{
        __typename: 'TrafficIncident';
        id: string;
        address: string;
        latitude: number;
        longitude: number;
        published: string;
        createdAt: string;
        issueReported: string | null;
        trafficReportId: string | null;
        status: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    fetchedDateRange: {
      __typename: 'DateRange';
      start: string;
      end: string;
    } | null;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface OnDeleteApiCallSubscription {
  onDeleteAPICall: {
    __typename: 'APICall';
    id: string;
    start: string;
    status: APICallStatus;
    error: string | null;
    end: string | null;
    incidents: {
      __typename: 'ModelTrafficIncidentConnection';
      items: Array<{
        __typename: 'TrafficIncident';
        id: string;
        address: string;
        latitude: number;
        longitude: number;
        published: string;
        createdAt: string;
        issueReported: string | null;
        trafficReportId: string | null;
        status: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    fetchedDateRange: {
      __typename: 'DateRange';
      start: string;
      end: string;
    } | null;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}
