import { Injectable } from "@angular/core";
import { FirebaseService } from "./firebase_service";
import {createUserWithEmailAndPassword} from "firebase/auth"
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private firebase: FirebaseService){}

    register(email: string, password:string): Promise<any> {
        const auth = this.firebase.auth;
        return createUserWithEmailAndPassword(auth, email, password);
    }
}