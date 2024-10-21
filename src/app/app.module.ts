import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';  // Asegúrate de agregar esto

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { CrearPaqueteComponent } from './crear-paquete/crear-paquete.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HistoriaComponent,
    PaquetesComponent,
    ContactoComponent,
    RegistroEventoComponent,
    CrearPaqueteComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // Aquí estás importando ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
