(function (window, $, URITemplate) {
    "use strict";

    $(window).adaptTo("foundation-registry").register("foundation.collection.action.action", {
        name: "cq.inbox.download",
        handler: function (name, el, config, collection, selections) {
            let linkAttributeName = config.data.linkAttributeName;
            let payloadLink = $(selections).data(linkAttributeName).replace(/\/assetdetails.html|\/jcr:content.*/, "");

            let url = payloadLink;

            if (config.data.target) {
                window.open(url, config.data.target);
            } else {
                window.location = url;
            }
        }
    });
})(window, Granite.$, Granite.URITemplate);