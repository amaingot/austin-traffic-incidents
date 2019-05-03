import axios from 'axios';
import * as moment from 'moment-timezone';
import GraphQLClient from './GraphqlClient';
import { APICallStatus } from './types';

interface QueryParams {
  apiKey: string;
}

interface TrafficIncident {
  address: string;
  issue_reported: string;
  latitude: string;
  location: string;
  longitude: string;
  published_date: string;
  traffic_report_id: string;
  traffic_report_status: 'ARCHIVED' | 'ACTIVE';
  traffic_report_status_date_time: string;
}

type TrafficIncidentList = TrafficIncident[];

const queryAPI = async (
  params: QueryParams,
  client: GraphQLClient
): Promise<TrafficIncidentList> => {
  const time = moment()
    .tz('America/Chicago')
    .subtract(1, 'hour');

  const formattedTime = time.format('YYYY-MM-DDTHH:mm:ss');
  let data: TrafficIncidentList = [];

  const request = {
    method: 'GET',
    headers: { 'X-App-Token': params.apiKey },
    params: {
      $where: `traffic_report_status_date_time > "${formattedTime}" OR traffic_report_status = "ACTIVE"`,
      $limit: '10',
    },
  };

  const endpoint = 'https://data.austintexas.gov/resource/r3af-2r8x.json';

  try {
    await client.startApiCall(
      time,
      moment().tz('America/Chicago'),
      JSON.stringify({ endpoint, ...request })
    );

    const response = await axios.get<TrafficIncidentList>(endpoint, request);
    data = response.data;

    await client.apiCallSuccess(JSON.stringify(response));
  } catch (error) {
    await client.apiCallError(JSON.stringify(error));

    throw error;
  }
  return data;
};

export default queryAPI;
