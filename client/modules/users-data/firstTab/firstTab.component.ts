import { Component, OnInit } from '@angular/core';
import {UserInputService} from "../../../service/userinput.service";

declare var $:any;

@Component({
    selector: 'first-tab',
    styleUrls: ['client/modules/users-data/firstTab/firstTab.component.css'],
    templateUrl: 'client/modules/users-data/firstTab/firstTab.component.html'
})
export class FirstTab implements OnInit {

    checkNumber = [
        'propPrice',
        'bathrooms',
        'bedroom',
        'yearBuilt',
        'propSize'
    ];

    constructor(private userInput : UserInputService) {

    }

    ngOnInit() {
        $('.fa.fa-info-circle').popup({
                inline: true
        });
    }

    onKeyUp(from, data){
        for(let i = 0; i < this.checkNumber.length; i++){
            if(this.checkNumber[i] === from){
                let convertedInt = parseInt(data);
                this.userInput.pushtoComplete(from, convertedInt);
            }else{
                this.userInput.pushtoComplete(from, data);
            }
        }
    }



}
