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
var plotly = require('plotly')('realestateinvestment', 'z3rlpmfem6');
var phantom = require('phantom');
phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        page.open("http://www.google.com").then(function(status) {
            page.render('google.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});

var data = [
    {
        x: ["2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"],
        y: [1, 3, 6],
        type: "scatter"
    }
];
var graphOptions = {filename: "date-axes", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});


loginRouter.post("/signup", function (request: Request, response: Response, next: NextFunction) {

});

// login method
loginRouter.post("/", function (request: Request, response: Response, next: NextFunction) {

});

export { loginRouter }
