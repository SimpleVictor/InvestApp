import {
    Component, OnInit, AfterViewInit, ElementRef, ViewChild
} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserInputService} from "../../service/userinput.service";


declare var $:any;
declare var google;

@Component({
    selector: "home",
    styleUrls: ['client/modules/home/home.component.css'],
    templateUrl: `client/modules/home/home.component.html`
})
export class HomeComponent implements OnInit, AfterViewInit{
    @ViewChild("myLovelyChild") myProp;

    autocomplete;
    placeRDY;

    showLoader:boolean = false;

    constructor(public myEl: ElementRef, private routes: Router, private userService: UserInputService) {

    }


    ngOnInit(){
        this.autocomplete = new google.maps.places.Autocomplete(

            /** @type {!HTMLInputElement} */(this.myProp.nativeElement),
            {types: ['geocode']});
    }

    findout(){
        console.log(this.placeRDY);
    }

    navigate(){


        this.routes.navigate(['/users']);
    }


    onSubmit(value){
        this.showLoader = true;
        this.placeRDY = this.autocomplete.getPlace();
        setTimeout(() => {
            this.showLoader = false;
            this.userService.sendFirstAddress(this.placeRDY);
            this.routes.navigate(['/users']);
        }, 2500);
    }


    ngAfterViewInit(){

        const myElement = this.myEl.nativeElement.getElementsByClassName('myelement');
        // let autocomplete = this.myElement.nativeElement.getElemenybyId("autocomplete");
        // console.log(this.myEl.nativeElement.getElementsByClassName('autocomplete'));
        // console.log(autocomplete);


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
