import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css'],
})
export class FournisseurComponent {
  idFournisseur = 105;
  code = 'A104B89';
  libelle = 'MyTeck';
  
  hide: boolean = false;
  
  changeStateToTrue() {
    console.log('before : '+this.hide);
    this.hide = true;
    console.log('after : '+this.hide);
  }
  
  changeStateToFalse() {
    console.log('before : '+this.hide);
    this.hide = false;
    console.log('after : '+this.hide);
  }
}
