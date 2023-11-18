import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionWorkshopRoutingModule } from './interaction-workshop-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ListAccountComponent} from './list-account/list-account.component';
import { AccountComponent } from './account/account.component';
import { AddAccountComponent } from './add-account/add-account.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListAccountComponent,
    AccountComponent,
    AddAccountComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InteractionWorkshopRoutingModule,
    ReactiveFormsModule,

  ]
})
export class InteractionWorkshopModule { }
