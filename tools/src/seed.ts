import * as parse from "csv-parse/lib/sync";
import * as fs from "fs";
import { Client } from "@elastic/elasticsearch";
import * as moment from "moment";

interface CSVRow {
  "Traffic Report ID": string;
  "Published Date": string;
  "Issue Reported": string;
  Location: string;
  Latitude: string;
  Longitude: string;
  Address: string;
  Status: string;
  "Status Date": string;
}
const run = () => {
  const filepath = `${__dirname}/data.csv`;
  console.log(filepath);
  const file = fs.readFileSync(filepath, "utf8");

  const records: CSVRow[] = parse(file.toString(), { columns: true });

  const client = new Client({
    node:
      "https://search-austin-traffic-prod-b2d5ckjrf2sk4633eu7cmky3cu.us-east-1.es.amazonaws.com"
  });

  records.forEach(r => {
    const newRecord = {
      traffic_report_id: r["Traffic Report ID"],
      published_date: r["Published Date"],
      issue_reported: r["Issue Reported"],
      // location
    }
  });
};

run();
