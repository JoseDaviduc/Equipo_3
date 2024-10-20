import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearPaqueteComponent } from './crear-paquete/crear-paquete.component'; // Asegúrate de importar tu componente
import { RegistroEventoComponent } from './registro-evento/registro-evento.component'; // Importa el componente

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear-paquete', component: CrearPaqueteComponent }, // Asegúrate de que esta ruta esté aquí
  { path: 'registro-evento', component: RegistroEventoComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, // Ruta para el formulario de registro
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
