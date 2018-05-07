const aws = require('aws-sdk');
global.fetch = require("node-fetch");
const Amplify = require("aws-amplify");
Amplify.default.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: '{YOUR ID}',
        // REQUIRED - Amazon Cognito Region
        region: '{YOUR REGION}',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: '{YOUR ID}',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '{YOUR KEY}',
        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
    }
});
const Auth = Amplify.Auth;

exports.handler = function(event, context, callback) {
    Auth.signIn(event.username, event.password)
        .then(user => {
            console.log(user);
            callback(null, user);
        })
        .catch(err => {
            console.log(err);
            callback(err, null);
        });
};
