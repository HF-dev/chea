import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { PhotoprofilComponent } from './photoprofil/photoprofil.component';
import { AppelvideoComponent } from './appelvideo/appelvideo.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    PhotoprofilComponent,
    AppelvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
