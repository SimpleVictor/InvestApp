import { Router, Request, Response, NextFunction } from "express";
var Zillow  = require('node-zillow')
var zwsid = "X1-ZWz1ffywarbf9n_3csw9"


const loginRouter: Router = Router();
var plotly = require('plotly')('realestateinvestment1', 'cy9h5msvu7');
var phantom = require('phantom');

// getMortgageVsEquityChart()
// getCashFlowVsInterestPaymentsChart()
// downloadUrlPdf("http://www.yahoo.com")




function getMortgageVsEquityChart(){
    var chart_url = ''
    var trace1 = {
        x: ["giraffes", "orangutans", "monkeys"],
        y: [20, 14, 23],
        name: "SF Zoo",
        type: "bar"
    };
    var trace2 = {
        x: ["giraffes", "orangutans", "monkeys"],
        y: [12, 18, 29],
        name: "LA Zoo",
        type: "bar"
    };
    var data = [trace1, trace2];
    var layout = {barmode: "stack"};
    var graphOptions = {layout: layout, filename: "stacked-bar", fileopt: "overwrite"};
    plotly.plot(data, graphOptions, function (err, msg) {
        if(err) console.log(err);
        chart_url = msg.url
        console.log(msg);
    });
    return chart_url
}


function getCashFlowVsInterestPaymentsChart(){
    var chart_url = ''
    var trace1 = {
        x: [1, 2, 3],
        y: [40, 50, 60],
        name: "yaxis data",
        type: "scatter"
    };
    var trace2 = {
        x: [2, 3, 4],
        y: [4, 5, 6],
        name: "yaxis2 data",
        yaxis: "y2",
        type: "scatter"
    };
    var data = [trace1, trace2];
    var layout = {
        title: "Double Y Axis Example",
        yaxis: {title: "yaxis title"},
        yaxis2: {
            title: "yaxis2 title",
            titlefont: {color: "rgb(148, 103, 189)"},
            tickfont: {color: "rgb(148, 103, 189)"},
            overlaying: "y",
            side: "right"
        }
    };
    var graphOptions = {layout: layout, filename: "multiple-axes-double", fileopt: "overwrite"};
    plotly.plot(data, graphOptions, function (err, msg) {
        if(err) console.log(err);
        chart_url = msg.url;
        console.log(msg);
    });
    return chart_url
}

function downloadUrlPdf(url){
    phantom.create().then(function(ph) {
        ph.createPage().then(function(page) {
            page.open(url).then(function(status) {
                page.render(url + '.pdf').then(function() {
                    console.log('Page Rendered');
                    ph.exit();
                });
            });
        });
    });
}

function getZillowForAddress(address){
    var parameters = {
        address: "78 Albany Ave",
        citystatezip: "Pompton Lakes, NJ 07442",
        rentzestimate: true
    };
    var zillow = new Zillow(zwsid)
    zillow.get('GetSearchResults', parameters)
        .then(function(results) {
            console.log(results['response']['results']['result'][0])
            return results;
            // results here is an object { message: {}, request: {}, response: {}}
        })
}


loginRouter.post("/data", function (request: Request, response: Response, next: NextFunction) {
    console.log('testing does execution reach /data route?')
    let workWithMe = request.body;
    console.log(workWithMe);
    let sendMe = [getCashFlowVsInterestPaymentsChart(), getMortgageVsEquityChart()];
    console.log('**************' + sendMe);
    response.json(sendMe);


});

export { loginRouter }
