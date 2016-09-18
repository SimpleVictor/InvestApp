import { Router, Request, Response, NextFunction } from "express";
var Zillow  = require('node-zillow')

var parameters = {
    address: "78 Albany Ave",
    citystatezip: "Pompton Lakes, NJ 07442",
    rentzestimate: true
};
var zwsid = "X1-ZWz1ffywarbf9n_3csw9"
var zillow = new Zillow(zwsid)
zillow.get('GetSearchResults', parameters)
    .then(function(results) {
        console.log(results['response']['results']['result'][0])
        return results;
        // results here is an object { message: {}, request: {}, response: {}}
    })


const loginRouter: Router = Router();


loginRouter.post("/signup", function (request: Request, response: Response, next: NextFunction) {

});

// login method
loginRouter.post("/", function (request: Request, response: Response, next: NextFunction) {

});

export { loginRouter }
