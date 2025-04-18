import { Injectable } from "@angular/core";
import { FirebaseService } from "./firebase_service";
import {signInWithEmailAndPassword, browserSessionPersistence, browserLocalPersistence} from "firebase/auth"
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private firebase: FirebaseService){}

    login(email: string, password:string, rememberMe: boolean): Promise<any> {
        const auth = this.firebase.auth;

        const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;

        return auth.setPersistence(persistence).then(()=> {
            return signInWithEmailAndPassword(auth, email, password);
        })
    }
}