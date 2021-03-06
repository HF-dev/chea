import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, } from '@angular/material';
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
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {ChatComponent} from './chat/chat.component';
import {ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

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
    AmisComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAd713GfDN8oFGkNolcP7YPWTqidHaLy9E'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
