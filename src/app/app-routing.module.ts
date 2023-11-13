import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FournisseurComponent } from './DATABINDING-WORKSHOP/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './DATABINDING-WORKSHOP/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './DATABINDING-WORKSHOP/list-produits/list-produits.component';


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
    path: 'atelier3',loadChildren:()=>import('./workshop-routing/workshop-routing.module')
    .then(mod=> mod.WorkshopRoutingModule )
  },
  {
    path: 'user',loadChildren:()=>import('./usersModule/users.module')
    .then(mod=> mod.UsersModule )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
