$(document).ready(function () {
    let actionBar = document.getElementsByClassName('betty-ActionBar')[0];
    //wait till the actionbar is ready
    Coral.commons.ready(actionBar, function () {

        //Get item list fro left buttons
        let leftItems = actionBar.primary.items;

        //Add custom buttons to the action bar
        leftItems.add({}).appendChild(viewAssetProps());
        leftItems.add({}).appendChild(downloadAsset());

    });
});