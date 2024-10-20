import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CrearPaqueteComponent } from './crear-paquete/crear-paquete.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { EventosComponent } from './eventos/eventos.component';


@NgModule({
  declarations: [
    AdminComponent,
    CrearPaqueteComponent,
    RegistroEventoComponent,
    EventosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
