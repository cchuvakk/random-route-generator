import { Injectable } from "@angular/core";
import { FirebaseService } from "./firebase_service";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { HttpClient } from "@angular/common/http";
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

            return this.http.post('http://localhost:8080/api/users/register', {
                uid: user.uid,
                email: user.email
              }).toPromise();
         });
     }
}