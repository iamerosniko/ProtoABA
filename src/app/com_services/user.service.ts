import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//this abastract interface is implmented
import { UserApi } from '../../btfw/users/user-api';

@Injectable()
export class UserService implements UserApi {
    isAuthenticated = false;

    constructor() {}

    // signIn(username: string, role: string) : Observable<any> {
    //     this.isAuthenticated = true;
    //     return Observable.of({});
    // }

    signIn(username: string) : boolean {
        if (username == "sarmife") {
            this.isAuthenticated = true;
            return true;
        } else {
            return false;
        }
        
    }
}