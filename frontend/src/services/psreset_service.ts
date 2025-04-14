import { Injectable } from "@angular/core";
import { FirebaseService } from "./firebase_service";
import { sendPasswordResetEmail } from "firebase/auth";

@Injectable({
    providedIn: 'root'
})
export class PsresetService{
    constructor(private firebase: FirebaseService){}

    psreset(email:string): Promise<any>{
        const auth = this.firebase.auth;
        return sendPasswordResetEmail(auth, email);
    }
}
