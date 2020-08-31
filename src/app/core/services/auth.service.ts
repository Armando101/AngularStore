import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth
  ) { }

  createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential>{
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afa.signOut();
  }
}
