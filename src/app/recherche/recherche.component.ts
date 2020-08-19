import { listeLegumes } from './../mock/legume.mock';
import { Component, OnInit } from '@angular/core';
import { Legume } from '../models/legume';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  liste: Legume[];
  legumeSelect: Legume = null;
  message: string;
  recherche: boolean = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    this.liste = listeLegumes;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  rechercher(): void{
    this.message = null;
    this.legumeSelect = null;
    const nom: string = (document.getElementById('input') as HTMLInputElement).value;
    if (nom === ''){
      this.legumeSelect = null;
      this.message = 'Veuillez saisir le nom d\'un légume';
    }
    else{
      listeLegumes.forEach(value => {
        if(value.nom.toUpperCase().includes(nom.toUpperCase())){
          const legume: Legume = {
            nom: value.nom,
            description: value.description,
            photoUrl: value.photoUrl
          };
          this.legumeSelect = legume;
        }
      });
      if (this.legumeSelect == null){
        this.legumeSelect = null;
        this.message = 'Ce légume n\'est pas encore répertorié';
      }
    }
    this.recherche = true;
  }

  // modal
  open(content): void {
    this.rechercher();
    this.modalService.open(content);
  }

}
