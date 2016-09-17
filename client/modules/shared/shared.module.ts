import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {NgSemanticModule} from "ng-semantic/ng-semantic";
import {UserInputService} from "../../service/userinput.service";

@NgModule({
    imports:      [ CommonModule ,BrowserModule, HttpModule, NgSemanticModule],
    declarations: [ /* Declare components and pipes */],
    exports:      [ /* Export them */ ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                UserInputService
            ]
        };
    }
}
