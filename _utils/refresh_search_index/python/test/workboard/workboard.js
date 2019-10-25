/*global console window ActiveXObject */

/**
 * Register functions with the onload handler so they run when the page loads.
 * These functions typically change the DOM, such as adding handlers, headers,
 * footers, navigation, or term highlighting.
 * Adapted from Keith, Jeremy. DOM Scripting. Berkeley: Friends of Ed, 2005.
 * @param {Function} func - A reference to a function.
 */
function addLoadEvent(func) {
    "use strict";
    var oldOnload = window.onload;
    if (typeof window.onload !== "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        };
    }
}

/**
 * Get an XMLHttpRequest object accounting for MSIE oddities.
 * Adapted from Keith, Jeremy. Bulletproof Ajax. Berkeley: New Riders, 2007.
 * @returns {XMLHttpRequest|Boolean} A XMLHttpRequest object, or false.
 */
function getHTTPObject() {
    "use strict";
    var xhr = false;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e1) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
                console.log(e1);
            } catch (e2) {
                xhr = false;
                console.log(e2);
            }
        }
    }
    return xhr;
}

/**
 * Shortens URLs the way Google does for display on search result pages.
 * @param {String} url - A string representation of a URL.
 * @returns {String} A shorter string or the original string.
 */
function trimUrl(url) {
    "use strict";
    url = url.replace(/^([^\/]*\/\/[^\/]+\/).*(\/[^\/]+)$/, "$1\u2026$2");
    return url;
}

/**
 * Converts a number representing bytes to standard international units.
 * @param {Number} bytes - The size of a file in bytes.
 * @returns {String} A number string followed by a standard units identifier.
 */
function humanReadableSize(bytes) {
    "use strict";

    function roundAndAppend(num, suffix) {
        return num.toFixed(2) + suffix;
    }

    var kilo = 1000;
    var kibi = 1024;
    if (bytes >= Math.pow(kilo, 3)) {
        return roundAndAppend(bytes / Math.pow(kibi, 3), " GB");
    }
    if (bytes >= Math.pow(kilo, 2)) {
        return roundAndAppend(bytes / Math.pow(kibi, 2), " MB");
    }
    if (bytes >= kilo) {
        return roundAndAppend(bytes / kibi, " KB");
    }
    return bytes + " B";

}

/**
 * Trims the end of a string to return only the specified number of words.
 * @param {String} text - A string separated by spaces.
 * @param {Number} words - The number of words to return.
 * @returns {String} A string of the first words from the original string.
 */
function trimSnippet(text, words) {
    "use strict";
    return text.split(" ", words).slice(0, words).join(" ");
}

/**
 * Builds a result display item marked up as a p element
 * @param {Object} result - An object contining fields representing a search result.
 *
 * Side effects:
 *     Appends p to the end of the div[@id='content'] element.
 */
function showResults(result) {
    "use strict";

    var p = document.createElement("p");
    p.className = "result";

    var title = document.createElement("span");
    title.className = "title";

    var a = document.createElement("a");
    a.href = result.url;
    a.appendChild(document.createTextNode(result.title));

    title.appendChild(a);
    p.appendChild(title);

    var info = document.createElement("span");
    info.className = "info";

    var url = document.createElement("span");
    url.className = "url";
    url.appendChild(document.createTextNode(trimUrl(result.url)));

    info.appendChild(url);

    info.appendChild(document.createTextNode("\u2022"));

    var date = document.createElement("span");
    date.className = "date";
    date.appendChild(document.createTextNode(result.date));

    info.appendChild(date);

    info.appendChild(document.createTextNode("\u2022"));

    var size = document.createElement("span");
    size.className = "size";
    size.appendChild(document.createTextNode(humanReadableSize(result.stream_size)));

    info.appendChild(size);
    p.appendChild(info);

    var snippet = document.createElement("span");
    snippet.className = "snippet";
    snippet.innerHTML = trimSnippet(result.text, 60) + "\u2026";

    p.appendChild(snippet);
    var CONTENT = document.getElementById("CONTENT");
    CONTENT.appendChild(p);
}

/**
 * Retrieves a JSON file and converts it to an object.
 * Sends resulting JavaScript object to showResults().
 * @param {XMLHttpRequest} response - An active XMLHttpRequest object.
 */
function displayResponse(request) {
    "use strict";
    var jso = {};

    function processJson(key, value) {
        if (key === "url") {
            return "https://docs.cloudera.com" + value;
        }
        return value;
    }

    if (request.readyState === 4) {
        if (request.status === 200 || request.status === 304) {
            try {
                jso = JSON.parse(request.responseText, processJson);
            } catch (e) {
                console.log(e);
            }
            showResults(jso);
        }
    }
}

/**
 * Instantiates and activates an XMLHttpRequest object.
 * Sends active XMLHttpRequest object to displayResponse().
 * @param {String} file - A string representing a URL to a JSON file.
 * THIS IS NOT TESTED OR FINISHED
 */
function grabFileP() { // eventually the signature will be url, data
    var find = {};
    find.query = "compression";
    var request = getHTTPObject();
    if (request) {
        request.onreadystatechange = function () {
            displayResponse(request);
        };
        request.open("POST", "http://52.39.65.28:8983/solr/dhc/query");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(find));
    }
}

/**
 * Instantiates and activates an XMLHttpRequest object.
 * Sends active XMLHttpRequest object to displayResponse().
 * @param {String} file - A string representing a URL to a JSON file.
 */
function grabFile(file) {
    "use strict";
    var request = getHTTPObject();
    if (request) {
        request.onreadystatechange = function () {
            displayResponse(request);
        };
        request.open("GET", file, true);
        request.overrideMimeType("application/json");
        request.send(null);
    }
}

/**
 * Script tag hack can get a JSON file from a remote server.
 * @param {String} url - A string representing a URL of a remote JSON file.
 */
function getJson(url) {
    "use strict";
    var script = document.createElement("script");
    script.type = "application/javascript";
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

/**
 * Adds a paragraph with a link to the end of the div[@id='content'].
 * @param {String} url - A string representing a URL of a remote JSON file.
 */
function addLink() {
    "use strict";
    var a = document.createElement("a");
    a.href = "workboard.json";
    a.onclick = function () {
        grabFile(a.href);
        return false;
    };
    var text = document.createTextNode("Click here to see the contents of the text file.");
    a.appendChild(text);
    var p = document.createElement("p");
    p.className += "boo";
    p.appendChild(a);
    var CONTENT = document.getElementById("CONTENT");
    CONTENT.appendChild(p);
}
addLoadEvent(addLink);
