// admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { PackageManagementComponent } from './package-management/package-management.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    EventRegistrationComponent,
    PackageManagementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, // Añade FormsModule en los imports
    RouterModule.forChild([
      { path: 'admin', component: AdminDashboardComponent },
      { path: 'admin/events', component: EventRegistrationComponent },
      { path: 'admin/packages', component: PackageManagementComponent },
    ]),
  ],
})
export class AdminModule {}
