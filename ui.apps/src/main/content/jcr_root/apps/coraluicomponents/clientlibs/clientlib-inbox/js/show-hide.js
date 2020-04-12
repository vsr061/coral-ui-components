$(document).on('click', '.foundation-collection-item', function (item) {
    let assetPath = "/content/dam";
    let selector = ".foundation-selections-item";
    let linkAttributeName = "payloadLink";
    let row = $(item.target).closest(selector);
    let payloadPath = $(row).data(linkAttributeName);

    if (payloadPath && payloadPath.indexOf(assetPath) !== -1) {
        $(".cq-inbox-asset").removeClass("foundation-collection-action-hidden");
    } else {
        $(".cq-inbox-asset").addClass("foundation-collection-action-hidden");
    }
});