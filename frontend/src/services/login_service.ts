import { Injectable } from "@angular/core";
import { FirebaseService } from "./firebase_service";
import {signInWithEmailAndPassword} from "firebase/auth"
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private firebase: FirebaseService){}

    login(email: string, password:string): Promise<any> {
        const auth = this.firebase.auth;
        return signInWithEmailAndPassword(auth, email, password);
    }
}