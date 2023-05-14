import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './secciones/header/header.component';
import { AcercaDeComponent } from './secciones/acerca-de/acerca-de.component';
import { ExperienciaLaboralComponent } from './secciones/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './secciones/educacion/educacion.component';
import { HardAndSoftSkillsComponent } from './secciones/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProyectosComponent } from './secciones/proyectos/proyectos.component';
import { FooterComponent } from './secciones/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    HardAndSoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
