import { Router, Request, Response, NextFunction } from "express";



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
