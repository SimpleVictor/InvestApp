import {Injectable, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {CalculatorService} from "./calculations.service";

@Injectable()
export class UserInputService implements OnInit{

    originalAddress;
    myObject;

    completeSet = {};

    constructor(private http: Http, private calculator: CalculatorService) { }

    ngOnInit(){

    }

    sendFirstAddress(value){
        this.originalAddress = value;
        console.log(this.originalAddress);
    }

    pushtoComplete(name, data){
        // console.log(typeof (data));
        this.completeSet[name] = data;
    }


    doCalculations(){
        this.myObject = this.calculator.RedbullAllDay(this.completeSet);
    }






}
