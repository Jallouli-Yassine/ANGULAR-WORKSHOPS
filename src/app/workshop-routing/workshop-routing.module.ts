import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingRoutingModule } from './workshop-routing-routing.module';
import { Homew3Component } from './homew3/homew3.component';
import { InoviceListComponent } from './inovice-list/inovice-list.component';
import { InoviceComponent } from './inovice/inovice.component';
import { MainInoviceComponent } from './main-inovice/main-inovice.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    MainInoviceComponent,
    InoviceListComponent,
    InoviceComponent,
    NavbarComponent,
    Homew3Component,
  ],
  imports: [
    CommonModule,
    WorkshopRoutingRoutingModule
  ]
})
export class WorkshopRoutingModule { }
