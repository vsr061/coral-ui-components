(function (window, $, URITemplate) {
    "use strict";

    $(window).adaptTo("foundation-registry").register("foundation.collection.action.action", {
        name: "cq.inbox.viewprops",
        handler: function (name, el, config, collection, selections) {
            let linkAttributeName = config.data.linkAttributeName;
            let propsLink = config.data.href;
            let payloadLink = $(selections).data(linkAttributeName).replace(/\/assetdetails.html|\/jcr:content.*/, "");

            let url = propsLink.concat(payloadLink);

            if (config.data.target) {
                window.open(url, config.data.target);
            } else {
                window.location = url;
            }
        }
    });
})(window, Granite.$, Granite.URITemplate);