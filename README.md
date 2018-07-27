# EZCodeAdalAngular5

This library is a Azure Active Directory Authentication Library (adal.js) wrapper package for Angular 5. It can be used to authenticate Angular 5 application for Azure Active Directory and generate token to communicate to MS Graph API and 3rd party Web API secured by Azure AD. 

## Installation

Run the following command to install the package. 
`npm install ezcode-adalmts --save`

## Authenticate Usage
1. Create a adal configuration file ezcodeadalconfig.ts under service folder


2. You can change the adal configuration via code at the runtime. 

3. Update app.module.ts to include the ezcode-adal-angular5 library. Make sure you set useHash to true because adal relies on hash to return the token. 

4. Add EZCodeAdalComponentGuard to secure your component. When users click the secured components, application will redirect them to Azure AD login page. 

