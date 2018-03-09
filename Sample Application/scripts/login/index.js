const aws = require('aws-sdk');
global.fetch = require("node-fetch");
const Amplify = require("aws-amplify");
Amplify.default.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-2:188df8dd-a1c4-4622-857f-0008b9c59da5',
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_I4XXj25Wt',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '27f8ob7fqv7fhfs5u4issu2neq',
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