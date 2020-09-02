import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  // tslint:disable-next-line: variable-name
  constructor(@Inject(DOCUMENT) private _doc: Document) { }

  saveToken(token: string): void {
    this.getWindow().localStorage.setItem('token', token);
  }

  getToken(): string {
    return this.getWindow().localStorage.getItem('token');
  }

  private getWindow(): Window | null {
    return this._doc.defaultView;
  }

}
