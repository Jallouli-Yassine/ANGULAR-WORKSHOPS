import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FournisseurComponent } from './DATABINDING-WORKSHOP/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './DATABINDING-WORKSHOP/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './DATABINDING-WORKSHOP/list-produits/list-produits.component';
import { MainInoviceComponent } from './ROUTING-WORKSHOP/main-inovice/main-inovice.component';
import { InoviceListComponent } from './ROUTING-WORKSHOP/inovice-list/inovice-list.component';
import { InoviceComponent } from './ROUTING-WORKSHOP/inovice/inovice.component';
import { NavbarComponent } from './ROUTING-WORKSHOP/navbar/navbar.component';
import { Homew3Component } from './ROUTING-WORKSHOP/homew3/homew3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitsComponent,
    MainInoviceComponent,
    InoviceListComponent,
    InoviceComponent,
    NavbarComponent,
    Homew3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
