import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AppService {
    constructor(public router: Router) {}

    // 每次用户登陆进行校验
    login(account: string, password: string): void {
        if(account && password) {
            this.router.navigateByUrl('/home');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }

}