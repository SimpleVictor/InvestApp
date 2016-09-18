import {Component, OnInit, ViewChild} from '@angular/core';
import {UserInputService} from "../../../service/userinput.service";

@Component({
    selector: 'second-tab',
    styleUrls: ['client/modules/users-data/secondTab/secondTab.component.css'],
    templateUrl: 'client/modules/users-data/secondTab/secondTab.component.html'
})
export class SecondTab implements OnInit {

    constructor(private userInput: UserInputService) { }

    ngOnInit() { }


    onKeyUp(from, data){
        if(from === "interestrate"){
            this.userInput.pushtoComplete(from, parseInt(data)/100);
        }else{
            this.userInput.pushtoComplete(from, data);
        }
    }


}
