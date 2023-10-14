import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homew3Component } from './homew3/homew3.component';
import { MainInoviceComponent } from './main-inovice/main-inovice.component';
import { InoviceComponent } from './inovice/inovice.component';

console.warn('workshop 3 module loaded');
const routes: Routes = [
  {
    path: '',
    component: Homew3Component,
  },
  {
    path: 'main-inovice',
    component: MainInoviceComponent,
  },
  {
    path: 'inovice/:id/:active',
    component: InoviceComponent,
  },
  {
    path: 'invoice',
    component: InoviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopRoutingRoutingModule {}
