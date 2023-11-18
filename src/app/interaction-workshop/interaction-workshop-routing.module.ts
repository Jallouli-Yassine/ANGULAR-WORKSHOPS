import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListAccountComponent} from "./list-account/list-account.component";

const routes: Routes = [
  {
    path:'',
    component:ListAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionWorkshopRoutingModule { }
