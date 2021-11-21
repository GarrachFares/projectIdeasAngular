import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProjectsComponent } from './projects/projects.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectsComponent,
    ProjectComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    MatToolbarModule ,
    MatIconModule ,
    MatMenuModule ,
    BrowserAnimationsModule ,
    MatSlideToggleModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
