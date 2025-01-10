// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';  // Importaciones necesarias
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { CrearPaqueteComponent } from './crear-paquete/crear-paquete.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EventoService } from './evento.service';
import { EventRegistrationComponent } from './admin/event-registration/event-registration.component';
import { LoginComponent } from './login/login.component';
import { Injectable } from '@angular/core';
// Importaciones del módulo Admin no son necesarias aquí
// import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
// import { EventRegistrationComponent } from './admin/event-registration/event-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HistoriaComponent,
    PaquetesComponent,
    ContactoComponent,
    CrearPaqueteComponent,
    FooterComponent,
    AdminDashboardComponent,
    LoginComponent,
    
    

    // Elimina las siguientes líneas
    // AdminDashboardComponent,
    // EventRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añadido para [(ngModel)]
    ReactiveFormsModule,
    HttpClientModule, // Importa HttpClientModule para las solicitudes HTTP
    CommonModule 

  ],
  providers: [EventoService],
  bootstrap: [AppComponent]

})
export class AppModule { }
export class AuthService {
}
