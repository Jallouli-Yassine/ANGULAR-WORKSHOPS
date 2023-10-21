import { Component, OnInit } from '@angular/core';
import { Produits } from '../../models/produits';
import { Product } from 'src/app/models/products/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css'],
})
export class ListProduitsComponent implements OnInit {
    /*******************ATELIER 4 SERVICES*************************/
  constructor(private ProductService: ProductService) {}

  ListProduct: Product[] = [];
  nbProduitAvecLibele: number | undefined ;

  ngOnInit(): void {
    this.ListProduct = this.ProductService.getAllProducts();
  }

  calculerNbPLibelle(libelle:string){
    this.nbProduitAvecLibele=this.ProductService.getNbProductsByLibelle(libelle);

  }

  /***********************************************/

  codeR!: string;
  idProduit!: number;
  code!: string;
  libelle!: string;
  prixUnitaire!: number;
  tauxTVA!: number;

  filterProductWithCode() {
    return !this.codeR
      ? this.list
      : this.list.filter((p) =>
          p.code.toLowerCase().startsWith(this.codeR.toLocaleLowerCase())
        );
  }

  clearInputs() {
    this.idProduit = null!;
    this.code = '';
    this.libelle = '';
    this.prixUnitaire = null!;
    this.tauxTVA = null!;
  }

  ajouterProduit() {
    const produit = new Produits(
      this.idProduit,
      this.code,
      this.libelle,
      this.prixUnitaire,
      this.tauxTVA,
      ''
    );
    this.list.push(produit);
    this.clearInputs();
  }

  list: Produits[] = [
    {
      idProduit: 1,
      code: 'P147852P',
      libelle: 'Produit1',
      prixUnitaire: 51,
      tauxTVA: 0.02,
      message: '',
    },
    {
      idProduit: 2,
      code: 'P147552P',
      libelle: 'Produit1',
      prixUnitaire: 30,
      tauxTVA: 0.198,
      message: '',
    },
    {
      idProduit: 3,
      code: 'D14785CC',
      libelle: 'Produit1',
      prixUnitaire: 20,
      tauxTVA: 0.198,
      message: '',
    },
    {
      idProduit: 4,
      code: 'E147852P',
      libelle: 'Produit1',
      prixUnitaire: 50,
      tauxTVA: 0.198,
      message: '',
    },
    {
      idProduit: 5,
      code: 'F147852P',
      libelle: 'Produit1',
      prixUnitaire: 70,
      tauxTVA: 0.02,
      message: '',
    },
  ];

  changerTva(p: Produits) {
    p.message = 'TVA modifiée';
    return (p.tauxTVA = 0.02);
  }

  getColor(prixUnitaire: number) {
    return prixUnitaire <= 50 ? 'blue' : 'black';
  }
}
