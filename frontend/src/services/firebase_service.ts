import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../environments/environment";
import { getAuth } from 'firebase/auth';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService{
    private _app = initializeApp(firebaseConfig);
    get app(){
        return this._app;
    }

    private _auth = getAuth(this._app);
    get auth(){
        return this._auth;
    }

    constructor() {}
}