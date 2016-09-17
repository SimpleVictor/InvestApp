var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com",
    accessKeyId: 'AKIAJULD5W42T4E3YZVQ',
    secretAccessKey: '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'
});


var dynamodb = new AWS.DynamoDB();


var params = {
    TableName: "AllProperties"
};

dynamodb.describeTable(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
        console.log(JSON.stringify(data, null, 2));
});