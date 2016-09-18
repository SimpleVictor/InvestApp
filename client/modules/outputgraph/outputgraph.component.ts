import {Component, OnInit, ElementRef, AfterViewChecked, ViewChild, AfterViewInit} from '@angular/core';
import {UserInputService} from "../../service/userinput.service";


declare var $:any;

@Component({
    selector: 'output-graph',
    styleUrls: ['client/modules/outputgraph/outputgraph.component.css'],
    templateUrl: 'client/modules/outputgraph/outputgraph.component.html'
})
export class OutputGraphComponent implements OnInit, AfterViewInit {

    @ViewChild("modal") myModal;

    myData;

    constructor(private el: ElementRef, private userInput: UserInputService) { }



    ngOnInit() {
        this.myData = this.userInput.useThisData;
        let bruh = Object.keys(this.myData.Object);
        console.log(bruh);
        console.log(this.myData);
    }

    hideModal(){
        $(this.myModal.nativeElement)
            .modal('hide');
    }

    ngAfterViewInit (){
        $(this.myModal.nativeElement)
            .modal('show', 'refresh');
    }

}
