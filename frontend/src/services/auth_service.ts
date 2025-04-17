import { Injectable } from "@angular/core";
import { FirebaseService } from "./firebase_service";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private firebase: FirebaseService, private http:HttpClient){}

    register(email: string, password:string): Promise<any> {
        const auth = this.firebase.auth;
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            return firstValueFrom(this.http.post('http://localhost:8080/api/users/register', {
                firebaseUid: user.uid,
                username: user.email
            }));
         });
     }
}