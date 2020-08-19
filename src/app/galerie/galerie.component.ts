import { Legume } from './../models/legume';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  listeLegumes: Legume[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
