import { Injectable } from '@angular/core';
import { Product } from '../models/products/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { id: 1, code: 127, libelle: 'PC', prixunitaire: 2000, tauxTva: 10 },
    { id: 2, code: 128, libelle: 'TV', prixunitaire: 1000, tauxTva: 20 },
    { id: 3, code: 128, libelle: 'Table', prixunitaire: 200, tauxTva: 30 },
    { id: 4, code: 128, libelle: 'TV', prixunitaire: 500, tauxTva: 35 },
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getNbProductsByLibelle(libelle: string) {
    let nb = 0;
    this.products.forEach((p) => {
      p.libelle === libelle ? nb++ : nb;
    });
    return nb;
  }
}
