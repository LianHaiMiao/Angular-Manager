import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable()

export class LoginService {
    constructor(public appservice: AppService) {}
    login(account:string, password:string): void {
        this.appservice.login(account, password);
    }
}


