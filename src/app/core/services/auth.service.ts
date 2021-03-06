import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
    private http: HttpClient,
    private token: TokenService
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

  hasUser(): Observable<firebase.User> {
    return this.afa.authState;
  }

  loginRestApi(email: string, password: string): Observable<object> {
    return this.http.post(`${environment.url_api}/auth`, { email, password })
      .pipe(
        tap((data: {token: string}) => {
          const token = data.token;
          this.token.saveToken(token);
        })
      );
  }
}
