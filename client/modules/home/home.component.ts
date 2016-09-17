import {Component, OnInit, AfterViewInit, ElementRef} from "@angular/core";


declare var $:any;

@Component({
    selector: "home",
    styleUrls: ['client/modules/home/home.component.css'],
    templateUrl: `client/modules/home/home.component.html`
})
export class HomeComponent implements OnInit, AfterViewInit{
    constructor(public myElement: ElementRef) {}


    ngOnInit(){

    }

    myLocation(){
        console.log("dsfsdf");
    }

    ngAfterViewInit(){
        const myElement = this.myElement.nativeElement.getElementsByClassName('myelement');


        //Start functions when jquery is ready
        $("document").ready(function() {
            handleTyping();
        });

        //This handles the typing animation on the front page
        //the typed method is coming from typed.js in
        // */public/assets/typed.js*
        function handleTyping () {
            $('.myelement').typed({
                strings: ["Real Estate Calculator",
                "Permits and Licenses",
                "Net Operating Income",
                "Payment Analysis",
                 "Property Insurance"],
                typeSpeed: 50,
                starDelay: 200,
                backDelay: 600,
                loop: true,
                showCursor: true,
                cursorChar: "|"
            });

        }



    }

}
