
# Coral UI Components for AEM Inbox [![Build Status](https://travis-ci.com/vsr061/coral-ui-components.svg?branch=master)](https://travis-ci.com/github/vsr061/coral-ui-components)

This project is developed to show how to add custom front end components where node overlay is not possible. We will develop these components with Coral & Granite client side foundation UIs.

## Modules

The only part of the project is:

* ui.apps: contains the /apps parts of the project, ie JS clientlibs for Coral UI

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage
    
Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish
    
Or alternatively

    mvn clean install -PautoInstallPackage -Daem.port=4503