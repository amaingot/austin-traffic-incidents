import { useQuery } from 'react-apollo-hooks';
import { getApiCall, getIncident, listApiCalls, listIncidents } from 'src/graphql/queries';
import {
  GetApiCallQueryData,
  GetApiCallQueryVariables,
  GetIncidentQueryData,
  GetIncidentQueryVariables,
  ListApiCallsQueryData,
  ListApiCallsQueryVariables,
  ListIncidentsQueryData,
  ListIncidentsQueryVariables,
} from 'src/graphql/types';

export const useIncidentList = (variables: ListIncidentsQueryVariables = {}) =>
  useQuery<ListIncidentsQueryData, ListIncidentsQueryVariables>(listIncidents, {
    variables,
  });

export const useIncident = (id: string) =>
  useQuery<GetIncidentQueryData, GetIncidentQueryVariables>(getIncident, { variables: { id } });

export const useApiCallList = (variables: ListApiCallsQueryVariables = {}) =>
  useQuery<ListApiCallsQueryData, ListApiCallsQueryVariables>(listApiCalls, {
    variables,
  });

export const useApiCall = (id: string) =>
  useQuery<GetApiCallQueryData, GetApiCallQueryVariables>(getApiCall, { variables: { id } });
