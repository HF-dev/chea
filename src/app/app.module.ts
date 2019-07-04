import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { PhotoprofilComponent } from './photoprofil/photoprofil.component';
import { AppelvideoComponent } from './appelvideo/appelvideo.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreaprofilComponent } from './creaprofil/creaprofil.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { MapComponent } from './map/map.component';
import { AmisComponent } from './amis/amis.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    PhotoprofilComponent,
    AppelvideoComponent,
    AccueilComponent,
    CreaprofilComponent,
    RechercherComponent,
    MapComponent,
    AmisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
  
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
