// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importaciones necesarias
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { CrearPaqueteComponent } from './crear-paquete/crear-paquete.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HistoriaComponent,
    PaquetesComponent,
    ContactoComponent,
    RegistroEventoComponent,
    CrearPaqueteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añadido para [(ngModel)]
    ReactiveFormsModule,
    HttpClientModule, // Importa HttpClientModule para las solicitudes HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
