import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddDirectveComponent } from './user-add-directve/user-add-directve.component';


@NgModule({
  declarations: [
    ListUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserDetailComponent,
    UserAddDirectveComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule  ]
})
export class UsersModule { }
