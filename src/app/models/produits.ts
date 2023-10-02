export class Produits {
  idProduit!: number;
  code!: string;
  libelle!: string;
  prixUnitaire!: number;
  tauxTVA!: number;
  message!: String;

  
  constructor(
    idProduit: number,
    code: string,
    libelle: string,
    prixUnitaire: number,
    tauxTVA: number,
    message: string
  ) {
    this.idProduit = idProduit;
    this.code = code;
    this.libelle = libelle;
    this.prixUnitaire = prixUnitaire;
    this.tauxTVA = tauxTVA;
    this.message = message;
  }
}
