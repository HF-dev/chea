import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import {AmisComponent} from './amis/amis.component' ;
import {AppelvideoComponent} from './appelvideo/appelvideo.component'
import {BienvenueComponent} from './bienvenue/bienvenue.component'
import {CreaprofilComponent} from './creaprofil/creaprofil.component'
import {MapComponent} from './map/map.component'
import {PhotoprofilComponent} from './photoprofil/photoprofil.component'
import {RechercherComponent} from './rechercher/rechercher.component'
const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'amis',
    component: AmisComponent
  },
  {
    path: 'appelvideo',
    component: AppelvideoComponent
  },
  {
    path: 'bienvenue',
    component: BienvenueComponent
  },
  {
    path: 'creaprofil',
    component: CreaprofilComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'photoprofil',
    component: PhotoprofilComponent
  },
  {
    path: 'rechercher',
    component: RechercherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
