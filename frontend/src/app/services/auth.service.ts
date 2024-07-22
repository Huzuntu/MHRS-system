import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  async signIn(email: string, password: string) 
  {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  getUser() 
  {
    return this.afAuth.authState;
  }
}
