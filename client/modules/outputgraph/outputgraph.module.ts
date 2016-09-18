import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from "@angular/common";



import { SharedModule } from "../shared/shared.module";

import {FormsModule} from "@angular/forms";
import {routing} from "./outputgraph.router";
import {OutputGraphComponent} from "./outputgraph.component";

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        SharedModule.forRoot(),
    ],
    declarations: [
        OutputGraphComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class OutputModule { }
