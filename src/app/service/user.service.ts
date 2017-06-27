import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable()
export class UserService {

    constructor() { }

    // 调用api，上传用户数据
    uploadUser(userinfo: User): void {
        
    }
}