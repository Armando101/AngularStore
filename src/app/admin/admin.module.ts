import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, DashboardComponent, ProductsListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    LayoutModule
  ]
})
export class AdminModule { }
