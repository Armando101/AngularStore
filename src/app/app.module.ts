import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';

import { LayoutComponent } from './layout/layout.component';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from './auth.interceptor';

import { SharedModule } from './shared/shared.module';

import * as Sentry from '@sentry/angular';
import { QuicklinkModule } from 'ngx-quicklink';

Sentry.init({
  dsn: 'https://254ba0a9de444a4f99fefddb138cb2c7@o441805.ingest.sentry.io/5412568'
});

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    SharedModule,
    BrowserAnimationsModule,
    QuicklinkModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
