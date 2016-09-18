import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { AppComponent }  from './app.component';
import { routing } from "./routes";
import { HelloComponent } from "./components/shared/hello.component";
import { ContactModule } from "./modules/contact/contact.module";
import { HomeModule } from "./modules/home/home.module";
import {UsersDataModule} from "./modules/users-data/users-data.module";
import {FormsModule} from "@angular/forms";
import {UserInputService} from "./service/userinput.service";
import {CalculatorService} from "./service/calculations.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgSemanticModule,
        ContactModule,
        HomeModule,
        UsersDataModule,
        routing
    ],
    providers: [
        UserInputService,
        CalculatorService
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
