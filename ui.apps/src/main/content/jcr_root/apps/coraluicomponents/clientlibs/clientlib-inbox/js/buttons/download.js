let downloadAsset = () => {

    //Create Coral Button Structure:
    let button = new Coral.Button().set({
        label: {
            innerHTML: "Download Asset"
        },
        variant: "quiet",
        icon: "download",
        iconSize: "S"
    });

    //Action config to handle click event
    /**
     * activeSelectionCount: Visibilty config for single/multiple select
     * if single then visble for single select only
     * data: Data config to for callback action
     */
    let actionConfig = {
        "activeSelectionCount": "single",
        "action": "cq.inbox.download",
        "data": {
            "linkAttributeName": "payloadLink",
            "target": "_blank"
        }
    }
    $(button).attr("data-foundation-collection-action", JSON.stringify(actionConfig));

    //Add Grnaite tracking features
    $(button).attr("trackingfeature");
    $(button).attr("trackingelement", "download asset");
    $(button).attr("tracking", "ON");

    //Add exiting inbox classes to align & style button properly:
    //cq-inbox-asset is addded to track element for show/hide functionality
    $(button).addClass("betty-ActionBar-item "
        + "cq-inbox-asset "
        + "foundation-collection-action "
        + "coral-Button--graniteActionBar");

    return button;

}