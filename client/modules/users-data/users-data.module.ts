import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { SharedModule } from "../shared/shared.module";

import {UsersDataComponent} from "./users-data.component";
import {routing} from "./users-data.routing";
import {ThirdTab} from "./thirdTab/thirdTab.component";
import {SecondTab} from "./secondTab/secondTab.component";
import {FirstTab} from "./firstTab/firstTab.component";

@NgModule({
    imports: [
        routing,
        SharedModule.forRoot(),
    ],
    declarations: [
        UsersDataComponent,
        FirstTab,
        SecondTab,
        ThirdTab
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class UsersDataModule { }
