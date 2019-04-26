# Austin Traffic Incidents App

> A real-time visualization of the Austin, Texas traffic incidents.

## Technical Architecture

- Web Server: AWS AppSync GraphQL API
- Authentication: AWS Cognito
- Database: AWS DynamoDB
- Data Fetcher: AWS Lambda running Node.js
- UI Framework: TypeScript + React
- UI Fetching: Apollo + AWS Amplify
- UI Hosting: S3
- CDN: AWS CloudFront
- DNS: AWS Route53
- Secret Management: AWS Secrets Manager
- CI/CD: CircleCI

## Data Source

The traffic incident data comes from the City of Austin's data portal. The data set used is the "Real-Time Traffic Incident Reports". The dataset is updated every 5 minutes. Each row in the data set is a "traffic incident" and there are just over 105k rows.

| Column Name                       | Data Type | Example                                               |
|-----------------------------------|-----------|-------------------------------------------------------|
| `traffic_report_id`               | string    | `C163BCD1CF90C984E9EDA4DBA311BCA369A7D1A1_1528871759` |
| `traffic_report_status`           | enum      | `ARCHIVED` or `ACTIVE`                                |
| `traffic_report_status_date_time` | timestamp | `2018-06-13T04:00:03.000`                             |
| `address`                         | string    | `W 21ST ST & GUADALUPE ST`                            |
| `issue_reported`                  | string    | `Crash Service`                                       |
| `latitude`                        | float     | `30.283797`                                           |
| `longitude`                       | float     | `-97.741906`                                          |
| `location`                        | string    | `(30.283797,-97.741906)`                              |
| `published_date`                  | timestamp | `2018-06-13T01:35:59.000`                             |

The API is implemented using the [Socrata Open Data API](https://dev.socrata.com/). The Socrata APIs provide rich query functionality through a query language we call the “Socrata Query Language” or “SoQL”. For more documentation around SoQL visit their [queries documentation](https://dev.socrata.com/docs/queries/).

### Querying

The queries use special characters like `$`, `:`, and spaces. They need to be escaped obviously, but here are some easy to read examples below.

Fetching incidents between the times of April 10 and April 26 in 2019:

`https://data.austintexas.gov/resource/r3af-2r8x.json?$where=traffic_report_status_date_time between '2019-04-10T00:00:00.000' and '2019-04-26T00:00:00.000'`

Fetching incidents after April 4 at midnight:

`https://data.austintexas.gov/resource/r3af-2r8x.json?$where=traffic_report_status_date_time > '2019-04-10T00:00:00.000'`

Fetching only 200 incidents:

`https://data.austintexas.gov/resource/r3af-2r8x.json?$limit=200`

Fetching the next 200 incidents with a 200 offset:

`https://data.austintexas.gov/resource/r3af-2r8x.json?$limit=200&$offset=200`

### Example Query

Request:

```bash
curl --request GET \
  --url 'https://data.austintexas.gov/resource/r3af-2r8x.json?%24limit=2' \
  --header 'x-app-token: APP_TOKEN'
```

Response:

```json
[
  {
    "address": "W 21ST ST & GUADALUPE ST",
    "issue_reported": "Crash Service",
    "latitude": "30.283797",
    "location": "(30.283797,-97.741906)",
    "longitude": "-97.741906",
    "published_date": "2018-06-13T01:35:59.000",
    "traffic_report_id": "C163BCD1CF90C984E9EDA4DBA311BCA369A7D1A1_1528871759",
    "traffic_report_status": "ARCHIVED",
    "traffic_report_status_date_time": "2018-06-13T04:00:03.000"
  },
  {
    "address": "0 Mopac Sb To Research Sb Ramp",
    "issue_reported": "Traffic Hazard",
    "latitude": "30.380525",
    "location": "(30.380525,-97.737873)",
    "longitude": "-97.737873",
    "published_date": "2018-09-28T19:52:58.000",
    "traffic_report_id": "2664C206999E7419517EE39E177797576A52201B_1538182378",
    "traffic_report_status": "ARCHIVED",
    "traffic_report_status_date_time": "2018-09-28T20:35:03.000"
  }
]
```