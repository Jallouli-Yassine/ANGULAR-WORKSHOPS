import { Component } from '@angular/core';
import { Fournisseur } from '../../models/fournisseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css'],
})
export class ListFournisseurComponent {
  list: Fournisseur[] = [
    { idFournisseur: 1, code: '1ABC4522', libelle: 'hp' },
    { idFournisseur: 2, code: '2ABC4522', libelle: 'dell' },
    { idFournisseur: 3, code: '3ABC4522', libelle: 'lenovo' },
    { idFournisseur: 100, code: '40ABC452', libelle: 'asus' },
  ];

  getWeight(code: String) {
    return code.startsWith('2A') ? 'bold' : 'normal';
  }

  deleteFournisseur = (index: number) => this.list.splice(index, 1);
}
