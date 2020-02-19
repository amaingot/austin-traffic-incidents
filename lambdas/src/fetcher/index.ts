import { ScheduledHandler } from "aws-lambda";
import moment from "moment";
import axios, { AxiosResponse } from "axios";
import { client } from "../utils/elasticsearch";
import "source-map-support/register";

/**
 Scheduled Event Example:
 {
    "account": "123456789012",
    "region": "us-east-2",
    "detail": {},
    "detail-type": "Scheduled Event",
    "source": "aws.events",
    "time": "2019-03-01T01:23:45Z",
    "id": "cdc73f9d-aea9-11e3-9d5a-835b769c0d9c",
    "resources": [
      "arn:aws:events:us-east-1:123456789012:rule/my-schedule"
    ]
  }
 */

const DATA_URL = process.env.TRAFFIC_URL || "";
const APP_TOKEN = process.env.TRAFFIC_APP_TOKEN || "";

const ES_INDEX = process.env.ES_INDEX || "";

interface TrafficIncident {
  traffic_report_id: string;
  traffic_report_status: "ARCHIVED" | "ACTIVE";
  traffic_report_status_date_time: string;
  address: string;
  issue_reported: string;
  latitude: string;
  longitude: string;
  location: string;
  published_date: string;
}

export const handler: ScheduledHandler = async (event, _context) => {
  const { time } = event;

  const anHourAgo = moment(time)
    .subtract(2, "hour")
    .format();
  const fetchedAt = moment().format();

  const queryResult = await axios.get<{}, AxiosResponse<TrafficIncident[]>>(
    DATA_URL,
    {
      headers: {
        "x-app-token": APP_TOKEN
      },
      params: {
        $where: `traffic_report_status_date_time > "${anHourAgo}"`
      }
    }
  );

  const incidents = queryResult.data;

  console.log(`Found ${incidents.length} incidents`);

  const index = ES_INDEX;

  const indexExists = await client.indices.exists({ index });
  console.log(indexExists.body);

  if (!indexExists.body) {
    console.log(`ES Index (${index}) does not exist`);
    await client.indices.create({
      index,
      body: {
        mappings: {
          properties: {
            location: {
              type: "geo_point"
            },
            published_date: {
              type: "date"
            },
            active: {
              type: "boolean"
            },
            traffic_report_status_date_time: {
              type: "date"
            },
            fetched_at: {
              type: "date"
            }
          }
        }
      }
    });
  }

  incidents.forEach(async i => {
    const indexResponse = await client.index({
      index,
      id: i.traffic_report_id,
      body: {
        ...i,
        location: `${i.latitude},${i.longitude}`,
        active: i.traffic_report_status === "ACTIVE",
        fetched_at: fetchedAt
      }
    });
    console.log(`Indexed Incident: ${JSON.stringify(indexResponse)}`);
  });
};
