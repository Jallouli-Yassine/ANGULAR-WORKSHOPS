import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddDirectveComponent } from './user-add-directve/user-add-directve.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserComponent,
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
  {
    path: 'addReactiveForm',
    component:UserAddDirectveComponent,
  },
  {
    path: 'update/:id',
    component: UpdateUserComponent,
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
