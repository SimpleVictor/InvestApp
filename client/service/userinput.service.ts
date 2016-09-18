import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {CalculatorService} from "./calculations.service";
import "rxjs/add/operator/map";

@Injectable()
export class UserInputService implements OnInit{

    originalAddress;
    myObject;


    useThisData;

    completeSet = {};

    endPointUrl: string = "http://localhost:3000/user/data";

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
        console.log(this.myObject);
        this.useThisData = this.myObject;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.post(this.endPointUrl, JSON.stringify(this.myObject),options)
            .map( (res:Response) => res.json())
            .subscribe(
                (data) => {
                    if(data) console.log(data);

                    return true;
                }, (err) => {
                    if(err) console.log(err);
                    return true;
                }
            )

    }

    getProgress(){
        return this.getIt();
    }

    getIt(){
        let obj = this.completeSet;
        let size = 0, key;
        for (key in obj) {
            if (this.completeSet.hasOwnProperty(key)) size++;
        }
        return size;
    }





}
