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

/*
 * 2019-09-03 rpc I give up. Doesn't seem reasonable to correctly set up
 * CSP on a site that wasn't initially designed for it.
 *
    let globalSrc = [
        "'self'",
        "*.cloudera.com",
        "*.hortonworks.com",
        "cloudera.com",
        "hortonworks.com"];
    let imgSrc = [
        "data:",
        "https://clients1.google.com",
        "https://cloudera.sc.omtrdc.net",
        "https://www.google-analytics.com",
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
        "https://content.atomz.com",
        "https://cse.google.com",
        "https://nool.td.hortonworks.com:8983",
        "https://stackpath.bootstrapcdn.com",
        "https://www.google-analytics.com",
        "https://www.google.com",
        "https://www.googletagmanager.com",
        "https://yoop.td.hortonworks.com:8983"];
    let scriptSrcElem = [
        "https://connect.facebook.net",
        "https://js.driftt.com",
        "https://js.idio.co",
        "https://ml314.com",
        "https://pi.pardot.com",
        "https://s.adroll.com",
        "https://scripts.demandbase.com",
        "https://siteimproveanalytics.com",
        "https://sjs.bizographics.com",
        "https://up.amp.live",
        "https://web-analytics.engagio.com",
        "https://www.googleadservices.com"];
    let connectSrc = [
        "https://cloudera.tt.omtrdc.net",
        "https://dpm.demdex.net"];
    let frameSrc = [
        "https://assets.adobedtm.com"];

    response.headers["content-security-policy"] = [{value:
        `default-src ${globalSrc.join(" ")};` +
        `img-src ${globalSrc.concat(imgSrc).join(" ")};` +
        `font-src ${globalSrc.concat(fontSrc).join(" ")};` +
        `style-src ${globalSrc.concat(styleSrc).join(" ")};` +
        `script-src ${globalSrc.concat(scriptSrc).join(" ")}` +
        `script-src-elem ${globalSrc.concat(scriptSrcElem).join(" ")}` +
        `connect-src ${globalSrc.concat(connectSrc).join(" ")}` +
        `frame-src ${globalSrc.concat(frameSrc).join(" ")}`}];
 */

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
    /*
     * Disabled because it prevents the How To for Gurus from working:
     *     https://www.cloudera.com/campaign/how-tos-for-gurus/chapters/chapter-2.html
     *
     * response.headers["x-frame-options"] = [{ value: "DENY" }];
     */

    return callback(null, response);
};
