/**
 * Lambda@Edge function for https://docs.hortonworks.com/
 * Redirects all requests to https://docs.cloudera.com/
 * Based on AWS example code:
 * - https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html#lambda-examples-http-redirect
 * Implemented as a Lambda@Edge function due to the need to support HTTPS.
 * S3 > Static Website Hosting > Redirection rules used for HTTP services at:
 * - http://docs-dev.hortonworks.com/
 * - http://docs-stage.hortonworks.com/
 * For example, Redirection rules for http://docs-dev.hortonworks.com/:
 * <RoutingRules>
 *  <RoutingRule>
 *    <Condition>
 *      <KeyPrefixEquals>index.html</KeyPrefixEquals>
 *    </Condition>
 *    <Redirect>
 *      <HostName>docs-dev.cloudera.com</HostName>
 *      <ReplaceKeyPrefixWith>HDPDocuments/index.html</ReplaceKeyPrefixWith>
 *    </Redirect>
 *  </RoutingRule>
 *  <RoutingRule>
 *    <Condition>
 *      <KeyPrefixEquals/>
 *    </Condition>
 *    <Redirect>
 *      <HostName>docs-dev.cloudera.com</HostName>
 *    </Redirect>
 *  </RoutingRule>
 * </RoutingRules>
 *
 * CloudFront Event: Viewer Request
 */
exports.handler = async (event, context, callback) => {
    "use strict";
    const request = event.Records[0].cf.request;
    const response = {
        status: "301",
        statusDescription: "Moved Permanently",
        headers: {
            location: [{
                key: "Location",
                value: `https://docs.cloudera.com/HDPDocuments${request.uri}`,
            }],
        },
    };
    callback(null, response);
};
