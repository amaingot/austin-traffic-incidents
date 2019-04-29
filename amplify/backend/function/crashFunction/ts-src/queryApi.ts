import axios from 'axios';
import * as moment from 'moment-timezone';

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

export type TrafficIncidentList = TrafficIncident[];

const queryAPI = async (params: QueryParams): Promise<TrafficIncidentList> => {
  const time = moment()
    .tz('America/Chicago')
    .subtract(1, 'hour')
    .format('YYYY-MM-DDTHH:mm:ss');
  let data: TrafficIncidentList = [];

  try {
    const response = await axios.get<TrafficIncidentList>(
      'https://data.austintexas.gov/resource/r3af-2r8x.json',
      {
        headers: { 'X-App-Token': params.apiKey },
        params: {
          $where: `traffic_report_status_date_time > "${time}" OR traffic_report_status = "ACTIVE"`,
          $limit: '10',
        },
      }
    );
    data = response.data;
  } catch (error) {
    throw error;
  }
  return data;
};

export default queryAPI;
