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
        
        function redirectToFirstTopic() {
        "use strict";
        var firstTopicUrl = document
        .getElementsByClassName("topicref")[0]
        .getElementsByTagName("a")[0]
        .href;
        //    window.alert(firstTopicUrl);
        window.location = firstTopicUrl;
        }
        
        addLoadEvent(redirectToFirstTopic);