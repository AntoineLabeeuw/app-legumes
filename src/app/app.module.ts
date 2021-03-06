import { AproposComponent } from './apropos/apropos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { RechercheComponent } from './recherche/recherche.component';
import { GalerieComponent } from './galerie/galerie.component';

const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'galerie', component: GalerieComponent},
  { path: 'apropos', component: AproposComponent},
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GalerieComponent,
    AproposComponent,
    MenuComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
