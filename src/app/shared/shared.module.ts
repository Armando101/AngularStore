import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CartRepeatPipe } from '../core/pipes/cart-repeat.pipe';

import { MaterialModule } from '@material/material.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    CartRepeatPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    QuicklinkModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CartRepeatPipe
  ]
})
export class SharedModule { }
