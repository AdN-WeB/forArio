export class Article {
  reference: string;
  nom: string;
  description: string;
  prix: number;

  constructor(
    reference: string,
    nom: string,
    description: string,
    prix: number
  ) {
    this.reference = reference;
    this.nom = nom;
    this.description = description;
    this.prix = prix;
  }
}
