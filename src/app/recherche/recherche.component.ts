import { listeLegumes } from './../mock/legume.mock';
import { Component, OnInit } from '@angular/core';
import { Legume } from '../models/legume';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  liste: Legume[];
  legumeSelect: Legume = null;
  message: string;
  recherche:boolean = false;

  constructor() {
    this.liste = listeLegumes;
  }

  ngOnInit(): void {
  }

  rechercher(): void{
    this.message =null;
    this.legumeSelect = null;
    const nom: string = (document.getElementById('input') as HTMLInputElement).value;
    if (nom === ''){
      this.legumeSelect = null;
      this.message = 'Veuillez saisir le nom d\'un légume';
    }
    else{
      let i: number;
      listeLegumes.forEach(value => {
        if(value.nom.includes(nom)){
          const legume: Legume = {
            nom: value.nom,
            description: value.description,
            photoUrl: value.photoUrl
          }
          this.legumeSelect = legume;
        };
      })
      if(this.legumeSelect == null){
        this.legumeSelect = null;
        this.message = 'Ce légume n\'est pas encore répertorié';
      }
    }
    this.recherche = true;
  }

}
