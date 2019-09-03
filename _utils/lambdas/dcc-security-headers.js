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
    let globalSrc = [
        "'self'",
        "*.cloudera.com",
        "*.hortonworks.com",
        "cloudera.com",
        "hortonworks.com"];
    let imgSrc = [
        "data:",
        "https://clients1.google.com",
        "https://www.google.com",
        "https://www.googleapis.com"];
    let fontSrc = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://maxcdn.bootstrapcdn.com",
        "https://stackpath.bootstrapcdn.com",
        "https://use.typekit.net"];
    let styleSrc = [
        "'unsafe-inline'",
        "https://cdn.jsdelivr.net",
        "https://cdnjs.cloudflare.com",
        "https://code.jquery.com",
        "https://fonts.googleapis.com",
        "https://maxcdn.bootstrapcdn.com",
        "https://p.typekit.net",
        "https://stackpath.bootstrapcdn.com",
        "https://use.typekit.net",
        "https://www.google.com"];
    let scriptSrc = [
        "'unsafe-eval'",
        "'unsafe-inline'",
        "https://api.demandbase.com",
        "https://assets.adobedtm.com",
        "https://cdnjs.cloudflare.com",
        "https://code.jquery.com",
        "https://cse.google.com",
        "https://stackpath.bootstrapcdn.com",
        "https://www.google-analytics.com",
        "https://www.google.com",
        "https://www.googletagmanager.com"];

    response.headers["content-security-policy"] = [{value:
        `default-src ${globalSrc.join(" ")};` +
        `img-src ${globalSrc.concat(imgSrc).join(" ")};` +
        `font-src ${globalSrc.concat(fontSrc).join(" ")};` +
        `style-src ${globalSrc.concat(styleSrc).join(" ")};` +
        `script-src ${globalSrc.concat(scriptSrc).join(" ")}`}];

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
