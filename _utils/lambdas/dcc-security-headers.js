/*
 * From
 *   AWS Lambda Edge Workshops
 *     Customizing Content Delivery with Lambda@Edge
 *       Lab 1 - Security headers
 * https://github.com/aws-samples/aws-lambda-edge-workshops/tree/master/Workshop1/Lab1_Security
 *
 * CloudFront Event: Viewer Response
 */
exports.handler = async (event, context, callback) => {
    "use strict";
    // console.log("Event: ", JSON.stringify(event, null, 2));

    const response = event.Records[0].cf.response;

    /* Add HTTP Strict Transport Security to enforce HTTPS
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
     *
     * Strict-Transport-Security: max-age=31536000; includeSubDomains
     */
    response.headers["strict-transport-security"] = [{ value: "max-age=31536000; includeSubDomains" }];

    /* Add Content-Security-Policy header to mitigate XSS.
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
     *
     * Content-Security-Policy: default-src https: "self"
     */
    response.headers["content-security-policy"] = [{ value:
      "default-src 'self' cloudera.com hortonworks.com;" +
      "font-src 'self' cloudera.com hortonworks.com " +
        "https://fonts.gstatic.com https://fonts.googleapis.com;" +
      "style-src 'self' cloudera.com hortonworks.com " +
        "https://stackpath.bootstrapcdn.com https://cdnjs.cloudflare.com" +
        "https://fonts.googleapis.com;" +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' cloudera.com hortonworks.com " +
        "*.google.com *.jquery.com " +
        "https://stackpath.bootstrapcdn.com https://cdnjs.cloudflare.com"
     }];
     // probably will add cdn.fontawesome.com

    /* Add browser side XSS protection (for older browsers without CSP)
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
     *
     * X-XSS-Protection: 1; mode=block
     */
    response.headers["x-xss-protection"] = [{ value: "1; mode=block" }];

    /* Add MIME-type sniffing protection (also helps with XSS)
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
     *
     * X-Content-Type-Options: nosniff
     */
    response.headers["x-content-type-options"] = [{ value: "nosniff" }];

    /* Add X-Frame-Options to disable framing and mitigate clickjacking
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
     *
     * X-Frame-Options: DENY
     */
    response.headers["x-frame-options"] = [{ value: "DENY" }];

    return callback(null, response);
};
