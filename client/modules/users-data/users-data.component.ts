import {
    Component, OnInit, ElementRef, ViewChild, AfterViewChecked, trigger, state, transition,
    style, animate
} from '@angular/core';
import {UserInputService} from "../../service/userinput.service";


declare var $:any;

@Component({
    selector: 'user-data',
    styleUrls: ['client/modules/users-data/users-data.component.css'],
    templateUrl: 'client/modules/users-data/users-data.component.html'
})
export class UsersDataComponent implements OnInit , AfterViewChecked{

    @ViewChild('tab1') currentActive;
    @ViewChild('data1') currentActiveData;

    newPro;
    myProgress;
    startingAddress;

    componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    };
    realForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    };

    newActive={
        nativeElement: ''
    }
    newActiveData = {
        nativeElement: ''
    }

    constructor(private el: ElementRef, private userInput: UserInputService) { }

    ngOnInit() {
       //  this.startingAddress = this.userInput.originalAddress;
       // console.log(this.startingAddress);
       //  for (let i = 0; i < this.startingAddress.address_components.length; i++) {
       //      var addressType = this.startingAddress.address_components[i].types[0];
       //      if (this.componentForm[addressType]) {
       //          let val = this.startingAddress.address_components[i][this.componentForm[addressType]];
       //          this.realForm[addressType] =  val;
       //      }
       //  }
       //
       //  console.log(this.realForm);

    }

    activateTab(tab , elem){
        //Make sure the tabs are not the same before proceeding
        if($(elem)[0] === this.currentActive.nativeElement){
            console.log("They are the same");
        }else{
            //IF THE COMPONENT WAS NOT THE SAME
            //REMOVE THE CLASS FROM THE FIRST ONE
            //WE had to remove active and add active for both the tab and tab header

            //Remove "active" from the current tab and header
            $(this.currentActive.nativeElement).removeClass("active");
            $(this.currentActiveData.nativeElement).removeClass("active");

            //Add "active" to the new tab and header
            this.newActive.nativeElement = $(elem).addClass('active');
            this.newActiveData.nativeElement = $(tab).addClass('active');

            //Set the new Tab and header to the global current Active
            this.currentActive = this.newActive;
            this.currentActiveData = this.newActiveData;
        }
    }

    ngAfterViewChecked(){
        this.myProgress = this.userInput.getProgress();

        this.newPro = (this.myProgress/25)*100;

    }




}
