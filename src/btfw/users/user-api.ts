//this is ana example of abastract interface
//import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
    //signIn: (username: string, role: string) => Observable<any>;
    signIn: (username: string) => boolean;
}