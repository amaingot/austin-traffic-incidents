import { Client, Connection } from "@elastic/elasticsearch";
import aws4 from "aws4";
import AWS from "aws-sdk";

const ES_URL = `https://${process.env.ES_URL}`;

export class AWSConnection extends Connection {
  buildRequestObject(params: any) {
    const signedRequest = aws4.sign(
      {
        ...params,
        url: `${this.url.origin}${params.path}`,
        host: this.url.host
      },
      AWS.config.credentials
    );
    delete signedRequest.headers["Host"];
    delete signedRequest.headers["Content-Length"];

    const finalRequest = super.buildRequestObject(signedRequest);

    return finalRequest;
  }
}

export const client = new Client({
  node: ES_URL
  // Connection: AWSConnection
});
