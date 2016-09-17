import { Router, Request, Response, NextFunction } from "express";
var AWS = require("aws-sdk");
var fs = require('fs');
AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com",
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
});

console.log("Hello: " + process.env.accessKeyId);
console.log("Hello: " + process.env.secretAccessKey);
const usersRouter: Router = Router();

usersRouter.get("/", function (request: Request, response: Response, next: NextFunction) {
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
});

usersRouter.post("/", function (request: Request, response: Response, next: NextFunction) {

    var docClient = new AWS.DynamoDB();

    console.log("Importing properties into DynamoDB. Please wait.");

    var params={
        TableName: "AllProperties",
        Item:{
            "Address": {
                "M": {
                    "City": {
                        "S": "cool Lakes"
                    },
                    "State": {
                        "S": "Newer Jersey"
                    },
                    "Street": {
                        "S": "70 Albany Ave"
                    },
                    "ZipCode": {
                        "S": "07442"
                    }
                }
            },
            "AppreciationRate": {
                "N": "4"
            },
            "Bathrooms": {
                "N": "2"
            },
            "Bedrooms": {
                "N": "5"
            },
            "ClosingBuyCosts": {
                "N": "400"
            },
            "ClosingSellCosts": {
                "N": "300"
            },
            "DownPayment": {
                "N": "5"
            },
            "FullAddress": {
                "S": "70 Albany Ave, Pompton Lakes, New Jersey, 07442"
            },
            "HomeownersAssociation": {
                "N": "400"
            },
            "Insurance": {
                "N": "500"
            },
            "InterestRate": {
                "N": "5"
            },
            "LoanTerm": {
                "N": "30"
            },
            "MaintenanceReserve": {
                "N": "300"
            },
            "ManagementFee": {
                "N": "4"
            },
            "PropertySize": {
                "N": "500"
            },
            "PropertyTaxes": {
                "N": "10000"
            },
            "PropertyTaxIncrease": {
                "N": "4"
            },
            "PropertyValue": {
                "N": "300000"
            },
            "RentalIncome": {
                "N": "2400"
            },
            "RentalIncomeIncrease": {
                "N": "5"
            },
            "UserId": {
                "N": "0"
            },
            "VacancyAllowance": {
                "N": "3"
            },
            "YearBuilt": {
                "N": "1964"
            }
        }
    }

    docClient.putItem(params, function (err, data) {
        if (err) {
            console.error("Unable to add property. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded!");
        }
    });
    response.send("Chickenwings");
});


export { usersRouter }

