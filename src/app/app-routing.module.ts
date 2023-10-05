import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FournisseurComponent } from './DATABINDING-WORKSHOP/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './DATABINDING-WORKSHOP/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './DATABINDING-WORKSHOP/list-produits/list-produits.component';
import { NavbarComponent } from './ROUTING-WORKSHOP/navbar/navbar.component';
import { MainInoviceComponent } from './ROUTING-WORKSHOP/main-inovice/main-inovice.component';
import { Homew3Component } from './ROUTING-WORKSHOP/homew3/homew3.component';
import { InoviceComponent } from './ROUTING-WORKSHOP/inovice/inovice.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'atelier1',
    component: FournisseurComponent,
  },
  {
    path: 'atelier1exercice2',
    component: ListFournisseurComponent,
  },
  {
    path: 'atelier2',
    component: ListProduitsComponent,
  },
  {
    path: 'atelier3',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
