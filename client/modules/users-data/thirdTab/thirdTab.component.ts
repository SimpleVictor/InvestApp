import { Component, OnInit } from '@angular/core';
import {UserInputService} from "../../../service/userinput.service";
import {Router} from "@angular/router";

@Component({
    selector: 'third-tab',
    styleUrls: ['client/modules/users-data/thirdTab/thirdTab.component.css'],
    templateUrl: 'client/modules/users-data/thirdTab/thirdTab.component.html'
})
export class ThirdTab implements OnInit {
    showLoader:boolean = false;
    checkPercent = ['mangtFee',
                    'maintReserve',
                    'AppreRate',
                    'vacanyAll',
                    'rentIncomeInc',
                    'propTaxInc',
                    'closingCostB',
                    'closingCostS'];

    constructor(private userInput: UserInputService, private routes: Router) { }

    ngOnInit() { }

    onKeyUp(from, data){

                this.userInput.pushtoComplete(from, data);

    }

    sendData(){
        this.showLoader = true;
        let myBoo = this.userInput.doCalculations();
        if(true){
            this.showLoader = false;
            this.routes.navigate(['/final']);
        }
    }

}
