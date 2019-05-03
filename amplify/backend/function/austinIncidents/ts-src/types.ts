export interface CreateIncidentInput {
  id?: string | null;
  address: string;
  latitude: number;
  longitude: number;
  issueReported?: string | null;
  trafficReportId?: string | null;
  status?: string | null;
  published: string;
  createdAt: string;
  updatedAt: string;
  incidentApiCallId?: string | null;
}

export interface UpdateIncidentInput {
  id: string;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  issueReported?: string | null;
  trafficReportId?: string | null;
  status?: string | null;
  published?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  incidentApiCallId?: string | null;
}

export interface DeleteIncidentInput {
  id?: string | null;
}

export interface CreateAPICallInput {
  id?: string | null;
  callStart: string;
  callEnd?: string | null;
  status: APICallStatus;
  error?: string | null;
  queryStart: string;
  queryEnd: string;
  callMetadata?: string | null;
  responseMetatadata?: string | null;
}

export enum APICallStatus {
  STARTED = 'STARTED',
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
}

export interface UpdateAPICallInput {
  id: string;
  callStart?: string | null;
  callEnd?: string | null;
  status?: APICallStatus | null;
  error?: string | null;
  queryStart?: string | null;
  queryEnd?: string | null;
  callMetadata?: string | null;
  responseMetatadata?: string | null;
}

export interface DeleteAPICallInput {
  id?: string | null;
}

export interface ModelIncidentFilterInput {
  id?: ModelIDFilterInput | null;
  address?: ModelStringFilterInput | null;
  latitude?: ModelFloatFilterInput | null;
  longitude?: ModelFloatFilterInput | null;
  issueReported?: ModelStringFilterInput | null;
  trafficReportId?: ModelStringFilterInput | null;
  status?: ModelStringFilterInput | null;
  published?: ModelStringFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  updatedAt?: ModelStringFilterInput | null;
  and?: Array<ModelIncidentFilterInput | null> | null;
  or?: Array<ModelIncidentFilterInput | null> | null;
  not?: ModelIncidentFilterInput | null;
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
  callStart?: ModelStringFilterInput | null;
  callEnd?: ModelStringFilterInput | null;
  status?: ModelAPICallStatusFilterInput | null;
  error?: ModelStringFilterInput | null;
  queryStart?: ModelStringFilterInput | null;
  queryEnd?: ModelStringFilterInput | null;
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

export interface CreateIncidentMutationVariables {
  input: CreateIncidentInput;
}

export interface CreateIncidentMutation {
  createIncident: {
    __typename: 'Incident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    published: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

export interface UpdateIncidentMutationVariables {
  input: UpdateIncidentInput;
}

export interface UpdateIncidentMutation {
  updateIncident: {
    __typename: 'Incident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    published: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

export interface DeleteIncidentMutationVariables {
  input: DeleteIncidentInput;
}

export interface DeleteIncidentMutation {
  deleteIncident: {
    __typename: 'Incident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    published: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

export interface CreateApiCallMutationVariables {
  input: CreateAPICallInput;
}

export interface CreateApiCallMutation {
  createAPICall: {
    __typename: 'APICall';
    id: string;
    callStart: string;
    callEnd: string | null;
    status: APICallStatus;
    error: string | null;
    queryStart: string;
    queryEnd: string;
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
    callStart: string;
    callEnd: string | null;
    status: APICallStatus;
    error: string | null;
    queryStart: string;
    queryEnd: string;
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
    callStart: string;
    callEnd: string | null;
    status: APICallStatus;
    error: string | null;
    queryStart: string;
    queryEnd: string;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface GetIncidentQueryVariables {
  id: string;
}

export interface GetIncidentQueryData {
  getIncident: {
    __typename: 'Incident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    published: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

export interface ListIncidentsQueryVariables {
  filter?: ModelIncidentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListIncidentsQueryData {
  listIncidents: {
    __typename: 'ModelIncidentConnection';
    nextToken: string | null;
  } | null;
}

export interface GetApiCallQueryVariables {
  id: string;
}

export interface GetApiCallQueryData {
  getAPICall: {
    __typename: 'APICall';
    id: string;
    callStart: string;
    callEnd: string | null;
    status: APICallStatus;
    error: string | null;
    queryStart: string;
    queryEnd: string;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface ListApiCallsQueryVariables {
  filter?: ModelAPICallFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}

export interface ListApiCallsQueryData {
  listAPICalls: {
    __typename: 'ModelAPICallConnection';
    nextToken: string | null;
  } | null;
}

export interface OnCreateIncidentSubscription {
  onCreateIncident: {
    __typename: 'Incident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    published: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

export interface OnUpdateIncidentSubscription {
  onUpdateIncident: {
    __typename: 'Incident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    published: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

export interface OnDeleteIncidentSubscription {
  onDeleteIncident: {
    __typename: 'Incident';
    id: string;
    address: string;
    latitude: number;
    longitude: number;
    issueReported: string | null;
    trafficReportId: string | null;
    status: string | null;
    published: string;
    createdAt: string;
    updatedAt: string;
  } | null;
}

export interface OnCreateApiCallSubscription {
  onCreateAPICall: {
    __typename: 'APICall';
    id: string;
    callStart: string;
    callEnd: string | null;
    status: APICallStatus;
    error: string | null;
    queryStart: string;
    queryEnd: string;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface OnUpdateApiCallSubscription {
  onUpdateAPICall: {
    __typename: 'APICall';
    id: string;
    callStart: string;
    callEnd: string | null;
    status: APICallStatus;
    error: string | null;
    queryStart: string;
    queryEnd: string;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}

export interface OnDeleteApiCallSubscription {
  onDeleteAPICall: {
    __typename: 'APICall';
    id: string;
    callStart: string;
    callEnd: string | null;
    status: APICallStatus;
    error: string | null;
    queryStart: string;
    queryEnd: string;
    callMetadata: string | null;
    responseMetatadata: string | null;
  } | null;
}
