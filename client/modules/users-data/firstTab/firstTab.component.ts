import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
    selector: 'first-tab',
    styleUrls: ['client/modules/users-data/firstTab/firstTab.component.css'],
    templateUrl: 'client/modules/users-data/firstTab/firstTab.component.html'
})
export class FirstTab implements OnInit {

    testMe: "sscds";

    constructor() { }

    ngOnInit() {
        $('.fa.fa-info-circle').popup({
                inline: true
        });
    }



}
