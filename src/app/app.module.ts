import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';

const ROUTES: Routes = [
  //{ path: 'accueil', component: AccueilComponent},
  //{ path: 'galerie', component: GalerieComponent},
  { path: 'apropos', component: AproposComponent},
  //{ path: '', pathMatch: 'full', redirectTo: '/accueil' },
];

@NgModule({
  declarations: [
    AppComponent,
    AproposComponent
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
