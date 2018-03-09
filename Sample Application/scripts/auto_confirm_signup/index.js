const AWS = require("aws-sdk");
exports.handler = function(event, context) {
    // This Lambda function returns a flag to indicate if a user should be auto-confirmed.

    // Perform any necessary validations.

    // Access your resource which contains the list of emails of users who were invited to sign up
    console.log(JSON.stringify(event));
    event.response.autoConfirmUser = true;
    // Return result to Cognito
    context.done(null, event);
};