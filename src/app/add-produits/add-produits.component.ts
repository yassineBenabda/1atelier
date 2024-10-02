import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',})
export class AddProduitsComponent {

  newProduit = new Produit();

  message!: string;

  constructor(private produitService: ProduitService) { }
  
  addProduit() {
    // console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message = "Le produit "+ this.newProduit.nomProduit +" a bien ete ajouté !";
  }
}