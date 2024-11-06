import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',})
export class AddProduitsComponent {

  newProduit = new Produit();

  message!: string;

  constructor(private produitService: ProduitService,
              private router : Router) { }
  
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
    });
    }
    
}