import { Injectable } from '@angular/core';

@Injectable()
export class UserInputService{

    originalAddress;

    constructor() { }

    sendFirstAddress(value){
        this.originalAddress = value;
        console.log(this.originalAddress);
    }

}
