import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CrearPaqueteComponent } from './crear-paquete/crear-paquete.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { EventosComponent } from './eventos/eventos.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'crear-paquete', component: CrearPaqueteComponent },
    { path: 'registro-evento', component: RegistroEventoComponent },
    { path: 'eventos', component: EventosComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
