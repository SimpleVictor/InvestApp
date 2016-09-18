import { Injectable } from '@angular/core';
import parseFloat = require("core-js/library/fn/number/parse-float");

@Injectable()
export class CalculatorService{

    // DataSet;
DataSet = {
    AppreRate:0.035,
    bathrooms:2,
    bedrooms:3,
    closingCostB:0.04,
    closingCostS:0.04,
    downpayment:24000,
    homeOwnerAssoc:20,
    insurance:109,
    interestrate:0.04,
    loanterm:30,
    maintReserve:0.05,
    mangtFee:0.1,
    propAddress:"162 hudson",
    propCity:"South Plainfield",
    propPrice:127,
    propSize:1822,
    propState:"New Jersey",
    propTaxInc:0.035,
    propZipcode:"07080",
    propertyTax:226,
    propertyValue:120000,
    rentIncomeInc:0.04,
    rentalIncome:1250,
    vacanyAll:0.05,
    yearBuilt:1981
};
    // make this into an object
    checkNumber = [
        'propPrice',
        'bathrooms',
        'bedroom',
        'yearBuilt',
        'propSize',
        'interest',
        'bedrooms',
        'downpayment',
        'homeOwnerAssoc',
        'insurance',
        'interestrate',
        'loanterm',
        'propertyTax',
        'propertyValue',
        'rentalIncome',
        'mangtFee',
        'maintReserve',
        'AppreRate',
        'vacanyAll',
        'rentIncomeInc',
        'propTaxInc',
        'closingCostB',
        'closingCostS'
    ];

    checkPercent = ['mangtFee',
        'maintReserve',
        'AppreRate',
        'vacanyAll',
        'rentIncomeInc',
        'propTaxInc',
        'closingCostB',
        'closingCostS'];

    constructor() { }

    RedbullAllDay(DataSets){
        // this.DataSet = DataSets;


        for(let i = 0; i < this.checkNumber.length; i++){
            for(let prop in this.DataSet){
                if(!this.DataSet.hasOwnProperty(prop)) continue;

                if(prop === this.checkNumber[i]){
                    this.DataSet[prop] = Number.parseFloat(this.DataSet[prop]);
                }
                if(prop === this.checkPercent[i]){
                    this.DataSet[prop] =  (this.DataSet[prop] / 100.0);

                }

            }
        }

        // console.log(this.DataSet);
        return this.calculateEverything();
    }


    calculateEverything(){

        var AllmyData;


        /* Property Object, contains 3 objects basic_info, mortgage, and calculation_assumptions. A property object contains all needed input to generate property
         report and calculations */


        /* basic_info object contains property price (in dollars), address (as a string), city (as a string), state (as a string), zip (as a string), yearBuilt (as an int)
         bedrooms(as an int), and bathrooms (as an int) */

        let debug = true;

        function basic_info (propertyPrice, address, city, state, zip, yearBuilt, bedrooms, bathroom){
            this.propertyPrice = propertyPrice;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.yearBuilt = yearBuilt;
            this.bedrooms = bedrooms;
            this.bathroom = bathroom
        }

        /* mortage object contains propertValue (in dollars), downPayment (in dollars), interestRate (as a decimal), and loan term (as an int) */
        function mortgage (hasMortgage, propertyValue, downPayment, interestRate, loanTerm){
            this.hasMortgage = hasMortgage;
            this.propertyValue = propertyValue;
            this.downPayment = downPayment;
            this.interestRate = interestRate;
            this.loanTerm = loanTerm
        }


        /* calculation_assumptions object contains stuff I dont feel like listing */
        function calculation_assumptions (rentalIncome, propertyTaxes, insurance, homeAssociation, managementFee, maintenanceReserve,
                                          appreciationRate, vacancyAllowance, rentalIncomeIncrease, propertyTaxIncrease, closingCostBuy, closingCostSell){
            this.rentalIncome = rentalIncome;
            this.propertyTaxes = propertyTaxes;
            this.insurance = insurance;
            this.homeAssociation = homeAssociation;
            this.managementFee = managementFee;
            this.maintenanceReserve = maintenanceReserve;
            this.appreciationRate = appreciationRate;
            this.vacancyAllowance = vacancyAllowance;
            this.rentalIncomeIncrease = rentalIncomeIncrease;
            this.propertyTaxIncrease = propertyTaxIncrease;
            this.closingCostBuy = closingCostBuy;
            this.closingCostSell = closingCostSell;
        }

        function roundToTwo(num) {

            return (Math.round(num *100) / 100);
        }

        function testPrintObject (object){
            var  total = " ";
            for(var property in object){
                total = total + object[property] + "  ";
            }
            total = total.replace(/\s\s+/g, '	');
            return total
            /*for (var property in object){
             console.log(property + ": " + object[property]);
             }*/
        }

        function downPaymentAsPercent(propertyPrice, downPayment){
            return downPayment/propertyPrice;
        }

        function calcEquityAtPurchase(propertyPrice, propertyValue, downPayment){
            return test_mortgage.propertyValue - test_basic_info.propertyPrice + test_mortgage.downPayment;
        }

        function calcLoanAmount(propertyPrice, downPayment){
            return propertyPrice-downPayment;
        }

        function calcCashToPurchase(propertyPrice, closingCostBuy, downPayment){
            return ((closingCostBuy * propertyPrice) + downPayment);
        }

        function calcClosingCostDollars(propertyPrice, closingCostBuy){
            return test_mortgage.closingCostBuy * propertyPrice;
        }

        function calcThirtyYearGrossIncome(initialRentAmount, rentalIncomeIncrease){
            var grossIncome = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            var i = 0
            for(var property in grossIncome){
                //console.log(i);
                grossIncome[property] = Math.round((initialRentAmount*12)*Math.pow((1+rentalIncomeIncrease), i));
                //console.log(grossIncome[property]);
                if(i==4){
                    i=9;
                }
                else if(i>5){
                    i+=10;
                }
                else{
                    i++;
                }

            }
            return grossIncome;
        }
        function calcThirtyYearVacancyAllowance(thirtyYearGross, vacancyAllowance){
            var vacancyAllowanceArray = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};

            for(var property in thirtyYearGross){
                vacancyAllowanceArray[property] = Math.round(thirtyYearGross[property] * vacancyAllowance);
            }
            return vacancyAllowanceArray;
        }

        function calcTotalOperatingIncome(vacancyAllowance, grossIncome){
            var totalOperatingIncome = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            for (var property in grossIncome){
                totalOperatingIncome[property] = grossIncome[property] - vacancyAllowance[property];
            }
            return totalOperatingIncome;
        }

        function calcThirtyYearCompoundIncrease(initialAmount, rateIncrease){
            var compoundIncrease = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            var i = 0
            for(var property in compoundIncrease){
                compoundIncrease[property] = Math.round((initialAmount*12)*Math.pow((1+rateIncrease), i));
                if(i==4){
                    i=9;
                }
                else if(i>5){
                    i+=10;
                }
                else{
                    i++;
                }
            }
            return compoundIncrease;
        }


        function constantValue30Year (value){
            var valueYear = value*12;
            var thirtyYearConstant = {Year_1: valueYear, Year_2: valueYear, Year_3: valueYear, Year_4: valueYear, Year_5: valueYear , Year_10: valueYear, Year_20: valueYear, Year_30: valueYear};
            return thirtyYearConstant;
        }

        function calcThirtyYearIncreaseConstantRate(thirtyYearGross, constantRate){
            var thirtyYearConstantRateIncrease = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};

            for(var property in thirtyYearConstantRateIncrease){
                thirtyYearConstantRateIncrease[property] = Math.round(thirtyYearGross[property] * constantRate);
            }
            return thirtyYearConstantRateIncrease;
        }

        function calcTotalOperatingExpense (thirtyYearPropertyTax, thirtyYearInsurance, thirtyYearHomeowner, thirtyYearMaientanceReserve, thirtyYearManagementFee){
            var thirtyYearOperating = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            for(var property in thirtyYearManagementFee){
                thirtyYearOperating[property] = thirtyYearPropertyTax[property] + thirtyYearInsurance[property] + thirtyYearHomeowner[property] +
                    thirtyYearMaientanceReserve[property] + thirtyYearManagementFee[property];
            }
            return thirtyYearOperating;
        }


        function calcNetOperatingIncome(totalOperatingIncome, totalOperatingExpense){
            var NetOperatingIncome = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            for(var property in totalOperatingIncome){
                NetOperatingIncome[property] = totalOperatingIncome[property] - totalOperatingExpense[property];
            }
            return NetOperatingIncome;
        }

        function calcThirtyYearMortgageExpense(mortgageRate, mortgageTerm, mortgageLoanAmount){
            var thirtyYearMortgageExpense = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            var c = mortgageRate/12;
            var L = mortgageLoanAmount;
            var n = (12 * mortgageTerm);
            var q = Math.pow((1+c),n);
            /*
             console.log("C: " +c);
             console.log("L: " + L);
             console.log("n: " + n);
             console.log("Q: "+q);
             */
            var yearlyMortgagePayment = Math.round(12*(L*((c*q)/(q-1))));
            for(var property in thirtyYearMortgageExpense){
                thirtyYearMortgageExpense[property] = yearlyMortgagePayment
            }

            return thirtyYearMortgageExpense;

        }

        function calcThirtyYearCashFlow(thirtyYearMortgageExpense, thirtyYearNetOperatingIncome){
            var thirtyYearCashFlow = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            for(var property in thirtyYearNetOperatingIncome){
                thirtyYearCashFlow[property] = thirtyYearNetOperatingIncome[property] - thirtyYearMortgageExpense[property];
            }
            return thirtyYearCashFlow;
        }

        function calcThirtyYearMonthlyCashFlow(thirtyYearCashFlow){
            var thirtyYearMonthlyCashFlow = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            for(var property in thirtyYearCashFlow){
                thirtyYearMonthlyCashFlow[property] = Math.round(thirtyYearCashFlow[property]/12);
            }
            return thirtyYearMonthlyCashFlow;
        }

        function calcThirtyYearCapitalAppreciation(propertyValue, expectedAppreciationRate){
            var compoundIncrease = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            var i = 1
            for(var property in compoundIncrease){
                //console.log(i);
                compoundIncrease[property] = Math.round((propertyValue*Math.pow((1+expectedAppreciationRate), i)));
                //console.log(compoundIncrease[property]);
                if(i==5){
                    i=10;
                }
                else if(i>5){
                    i+=10;
                }
                else{
                    i++;
                }
            }
            return compoundIncrease;
        }

        function computeMortgageSchedule(mortgageLoanAmount, interestRate, lengthLoan, annualMortgagePayment) {
            var amort_Schedule = [];
            var remaining = mortgageLoanAmount;
            var numPayments = lengthLoan;
            for (var i=0; i<=numPayments; i++) {
                var interest = remaining * (interestRate);
                var principle = ((annualMortgagePayment)-interest);
                var row = [i, principle>0?principle:0, interest>0?interest:0, remaining>0?remaining:0];
                amort_Schedule.push(row);
                remaining -= principle
            }

            return amort_Schedule;
        }

        function calcThirtyYearInterest (amortSchedule){
            var mortgageInterest = {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            var i = 0;
            for(var property in mortgageInterest){
                mortgageInterest[property] = Math.round(amortSchedule[i][2])
                //console.log("interest " + i + " " + amortSchedule[i][2])
                if(i<5) i++;
                else if(i<10) i+=5;
                else i+=10
            }
            return mortgageInterest;

        }

        function calcThirtyYearMortgageBalance(amortSchedule){
            var mortgageBalance= {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            var i = 0;
            for(var property in mortgageBalance){
                mortgageBalance[property] = Math.round(amortSchedule[i][3])
                //console.log("interest " + i + " " + amortSchedule[i][2])
                if(i<5) i++;
                else if(i<10) i+=5;
                else i+=10
            }
            return mortgageBalance;

        }

        function calcThirtyYearEquity(thirtyYearCapitalApprec, thirtyYearMortgageBalance){
            var thirtyYearEquity= {Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            for(var property in thirtyYearEquity){
                thirtyYearEquity[property] = Math.round(thirtyYearCapitalApprec[property] - thirtyYearMortgageBalance[property]);
            }
            return thirtyYearEquity;
        }

        function calcThirtyYearCapRates(NetOperatingIncome, closingCostBuy, propertyPrice){
            var capRates ={Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            for(var property in capRates){
                capRates[property] = roundToTwo((NetOperatingIncome[property] / (propertyPrice * (1 + closingCostBuy))*100)) ;
            }
            return capRates;
        }

        function calcCashonCash(annualCashFlow, mortgageLoanAmount, closingCostBuy, propertyPrice){
            var cashOnCashRates ={Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};
            for(var property in cashOnCashRates){
                cashOnCashRates[property] = roundToTwo((annualCashFlow[property] / ((propertyPrice - mortgageLoanAmount) +(propertyPrice*closingCostBuy))*100));
            }
            return cashOnCashRates;

        }

        function calcROI(annualCashFlow, thirtyYearMortgageExpense, thirtyYearInterestPayments, propertyPrice, downPayment, closingCostBuy, capitalApprec){
            var thirtyYearROI ={Year_1: 0, Year_2: 0, Year_3: 0, Year_4: 0 , Year_5: 0 , Year_10: 0, Year_20: 0, Year_30: 0};

            for(var property in thirtyYearROI){
                /*console.log("Annual CashFlow: "+ annualCashFlow[property] + " \n" + "Mortgage Expense: " + thirtyYearMortgageExpense[property] +
                 " \nInterest: " +thirtyYearInterestPayments[property] + "  \nProperty Price: " + propertyPrice + " \nDown Payment" + downPayment + "\nClosingCost " +closingCostBuy);*/
                thirtyYearROI[property] = roundToTwo((annualCashFlow[property] + (thirtyYearMortgageExpense[property] - thirtyYearInterestPayments[property]) +
                    (capitalApprec[property]-propertyPrice) )/(downPayment + (propertyPrice * closingCostBuy))*100)
            }
            return thirtyYearROI;
        }
        if(debug){
            var test_basic_info = new basic_info(this.DataSet.propPrice, this.DataSet.propAddress, this.DataSet.propCity, this.DataSet.propCity, this.DataSet.propZipcode, this.DataSet.yearBuilt, this.DataSet.bathrooms, this.DataSet.bathrooms);
            var test_mortgage = new mortgage(true, this.DataSet.propertyValue, this.DataSet.downpayment, this.DataSet.interestrate, this.DataSet.loanterm);
            var test_calculation_assumptions = new calculation_assumptions(this.DataSet.rentalIncome, this.DataSet.propertyTax, this.DataSet.insurance, this.DataSet.homeOwnerAssoc, this.DataSet.mangtFee, this.DataSet.maintReserve, this.DataSet.AppreRate, this.DataSet.vacanyAll, this.DataSet.rentIncomeInc, this.DataSet.propTaxInc, this.DataSet.closingCostB, this.DataSet.closingCostS);

            testPrintObject(test_basic_info);
            testPrintObject(test_mortgage);
            testPrintObject(test_calculation_assumptions);

            var loanAmount = test_basic_info.propertyPrice - (test_mortgage.downPayment);


            console.log("\nCASHFLOW 		 	Year 1	Year 2	Year 3	Year 4	Year 5	Year 10	Year 20	Year 30");
            var thirtyYearReturn = calcThirtyYearGrossIncome(test_calculation_assumptions.rentalIncome, test_calculation_assumptions.rentalIncomeIncrease);
            var thirtyYearVaccancy = calcThirtyYearVacancyAllowance(thirtyYearReturn, test_calculation_assumptions.vacancyAllowance);
            var thirtyYearOperatingIncome = calcTotalOperatingIncome(thirtyYearVaccancy, thirtyYearReturn);
            console.log("Gross Scheduled Income: 	" +testPrintObject(thirtyYearReturn));
            console.log(" less Vaccancy Allowance: 	" +testPrintObject(thirtyYearVaccancy));
            console.log("Total Operating Income  : 	" +testPrintObject(thirtyYearOperatingIncome));
            console.log("");

            var thirtyYearPropertyTaxes = calcThirtyYearCompoundIncrease(test_calculation_assumptions.propertyTaxes, test_calculation_assumptions.propertyTaxIncrease);
            var insuranceThirtyYear = constantValue30Year(test_calculation_assumptions.insurance);
            var homeAssociationYear = constantValue30Year(test_calculation_assumptions.homeAssociation);
            var maintenanceReserveThirtyYear = calcThirtyYearIncreaseConstantRate(thirtyYearReturn, test_calculation_assumptions.maintenanceReserve);
            var propertyManagementThirtyYear = calcThirtyYearIncreaseConstantRate(thirtyYearReturn, test_calculation_assumptions.managementFee);
            var thirtyYearOperatingExp = calcTotalOperatingExpense(thirtyYearPropertyTaxes, insuranceThirtyYear, homeAssociationYear, maintenanceReserveThirtyYear, propertyManagementThirtyYear)
            console.log("Property Taxes: 		" +testPrintObject(thirtyYearPropertyTaxes));
            console.log("Insurance:  			" +testPrintObject(insuranceThirtyYear));
            console.log("Homeowner's Association: 	" +testPrintObject(homeAssociationYear));
            console.log("Maientance Reserve: 		" +testPrintObject(maintenanceReserveThirtyYear))
            console.log("Property Management: 		" +testPrintObject(propertyManagementThirtyYear))
            console.log("Total Operating Expenses: 	" +testPrintObject(thirtyYearOperatingExp));

            var NetOperatingIncome = calcNetOperatingIncome(thirtyYearOperatingIncome, thirtyYearOperatingExp);
            var thirtyYearMortgageExpense = calcThirtyYearMortgageExpense(test_mortgage.interestRate, test_mortgage.loanTerm, loanAmount);
            var thirtyYearAnnualCashFlow = calcThirtyYearCashFlow(thirtyYearMortgageExpense, NetOperatingIncome);
            var thirtyYearMonthlyCashFlow = calcThirtyYearMonthlyCashFlow(thirtyYearAnnualCashFlow);
            console.log("\nNet Operating Income: 		" +testPrintObject(NetOperatingIncome));
            console.log(" less Mortgage Expense: 	" +testPrintObject(thirtyYearMortgageExpense));
            console.log("Annual Cash Flow: 		" +testPrintObject(thirtyYearAnnualCashFlow));
            console.log("Monthly Cash Flow: 		" +testPrintObject(thirtyYearMonthlyCashFlow));

            console.log("\nTax Benefits 		 	Year 1	Year 2	Year 3	Year 4	Year 5	Year 10	Year 20	Year 30");
            var amortSchedule = computeMortgageSchedule((test_basic_info.propertyPrice - test_mortgage.downPayment), test_mortgage.interestRate, test_mortgage.loanTerm, thirtyYearMortgageExpense.Year_1);
            var thirtyYearInterestPayments = calcThirtyYearInterest(amortSchedule);
            console.log("Depreciation: 		" );
            console.log("Mortgage Interest: 		" + testPrintObject(thirtyYearInterestPayments));

            console.log("\nEquity Accumulation		Year 1	Year 2	Year 3	Year 4	Year 5	Year 10	Year 20	Year 30");

            var capitalApprec = calcThirtyYearCapitalAppreciation(test_mortgage.propertyValue, test_calculation_assumptions.appreciationRate);
            var thirtyYearMortgageBalance = calcThirtyYearMortgageBalance(amortSchedule);
            var thirtyYearEquity = calcThirtyYearEquity(capitalApprec, thirtyYearMortgageBalance);
            console.log("Property Value: 		" +testPrintObject(capitalApprec));
            console.log(" less Mortgage Balance: 	" +testPrintObject(thirtyYearMortgageBalance));
            console.log("Equity: 			" +testPrintObject(thirtyYearEquity));

            console.log("\nFinancial Performace		Year 1	Year 2	Year 3	Year 4	Year 5	Year 10	Year 20	Year 30");
            var capRates = calcThirtyYearCapRates(NetOperatingIncome, test_calculation_assumptions.closingCostBuy, test_basic_info.propertyPrice);
            var cashOnCashRates = calcCashonCash(thirtyYearAnnualCashFlow, loanAmount, test_calculation_assumptions.closingCostBuy, test_basic_info.propertyPrice);
            var returnOnInvest = calcROI(thirtyYearAnnualCashFlow, thirtyYearMortgageExpense,thirtyYearInterestPayments, test_basic_info.propertyPrice, test_mortgage.downPayment, test_calculation_assumptions.closingCostBuy, capitalApprec);
            console.log("Capitilization Cap Rate 	" + testPrintObject(capRates));
            console.log("Cash on Cash Return COC		" + testPrintObject(cashOnCashRates));
            console.log("Return on Investment ROI: 	" + testPrintObject(returnOnInvest));


            AllmyData = {
                loanAmount: loanAmount,
                thirtyYearReturn: thirtyYearReturn,
                thirtyYearVaccancy : thirtyYearVaccancy,
                thirtyYearOperatingIncome : thirtyYearOperatingIncome,
                thirtyYearPropertyTaxes : thirtyYearPropertyTaxes,
                insuranceThirtyYear : insuranceThirtyYear,
                homeAssociationYear : homeAssociationYear,
                maintenanceReserveThirtyYear : maintenanceReserveThirtyYear,
                propertyManagementThirtyYear : propertyManagementThirtyYear,
                thirtyYearOperatingExp : thirtyYearOperatingExp,
                NetOperatingIncome : NetOperatingIncome,
                thirtyYearMortgageExpense : thirtyYearMortgageExpense,
                thirtyYearAnnualCashFlow : thirtyYearAnnualCashFlow,
                thirtyYearMonthlyCashFlow : thirtyYearMonthlyCashFlow,
                amortSchedule : amortSchedule,
                thirtyYearInterestPayments : thirtyYearInterestPayments,
                capitalApprec: capitalApprec,
                thirtyYearMortgageBalance : thirtyYearMortgageBalance,
                thirtyYearEquity : thirtyYearEquity,
                capRates : capRates,
                cashOnCashRates : cashOnCashRates,
                returnOnInvest : returnOnInvest
            }


        }



        return AllmyData;


    }




}
