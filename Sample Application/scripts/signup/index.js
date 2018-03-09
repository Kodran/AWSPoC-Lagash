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

var dynamodb = new aws.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    //register in cognito (got it?)
    Auth.signUp({
            username: event.firstName,
            password: event.password,
            attributes: {
                email: event.email,
                //phone_number:,   // optional - E.164 number convention
                // other custom attributes
                "family_name": event.lastName,
                "name": event.lastName,
                "middle_name": "middle name"
            },
            validationData: [] //optional
        })
        .then(data => {
            console.log(data);
            var userData = {
                Item: {
                    Email: event.email,
                    UserData: event
                },
                TableName: "User"
            };

            dynamodb.put(userData, function(err, data) {

                if (err) {
                    callback(err, null);
                } else {
                    callback(null, data);
                }

            });
        })
        .catch(err => {
            console.log(err);
            callback(err, null);
        });
};


function getSquema() {

    var params = {
        AttributeDefinitions: [{
                AttributeName: "FirstName",
                AttributeType: "S"
            },
            {
                AttributeName: "LastName",
                AttributeType: "S"
            },
            {
                AttributeName: "Email",
                AttributeType: "S"
            },
            {
                AttributeName: "Country",
                AttributeType: "S"
            }
        ],
        KeySchema: [{
                AttributeName: "FirstName",
                KeyType: "RANGE"
            },
            {
                AttributeName: "LastName",
                KeyType: "RANGE"
            },
            {
                AttributeName: "Email",
                KeyType: "HASH"
            },
            {
                AttributeName: "Country",
                KeyType: "RANGE"
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        },
        TableName: "User"
    };

    return params;
}