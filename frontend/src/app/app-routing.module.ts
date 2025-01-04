// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroEventoComponent } from './registro-evento/registro-evento.component';
import { CrearPaqueteComponent } from './crear-paquete/crear-paquete.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EventRegistrationComponent } from './admin/event-registration/event-registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent }, // Ruta para 'inicio'
  { path: 'historia', component: HistoriaComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registro-evento', component: RegistroEventoComponent },
  { path: 'crear-paquete', component: CrearPaqueteComponent },
  { path: 'admin', component: AdminDashboardComponent }, // Añadir una coma aquí
  { path: 'admin/events', component: EventRegistrationComponent },
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },         // Ruta para el login
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }