import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import {AmisComponent} from './amis/amis.component' ;
const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'amis',
    component: AmisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
