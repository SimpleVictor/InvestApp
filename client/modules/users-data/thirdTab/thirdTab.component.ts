import { Component, OnInit } from '@angular/core';
import {UserInputService} from "../../../service/userinput.service";

@Component({
    selector: 'third-tab',
    styleUrls: ['client/modules/users-data/thirdTab/thirdTab.component.css'],
    templateUrl: 'client/modules/users-data/thirdTab/thirdTab.component.html'
})
export class ThirdTab implements OnInit {

    checkPercent = ['mangtFee',
                    'maintReserve',
                    'AppreRate',
                    'vacanyAll',
                    'rentIncomeInc',
                    'propTaxInc',
                    'closingCostB',
                    'closingCostS'];

    constructor(private userInput: UserInputService) { }

    ngOnInit() { }

    onKeyUp(from, data){

                this.userInput.pushtoComplete(from, data);

    }

    sendData(){
        this.userInput.doCalculations();
    }

}
