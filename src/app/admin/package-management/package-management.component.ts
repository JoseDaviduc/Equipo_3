import { Component } from '@angular/core';

@Component({
  selector: 'app-package-management',
  templateUrl: './package-management.component.html',
  styleUrls: ['./package-management.component.css']
})

export class PackageManagementComponent {
  packages = [
    { name: 'Paquete Básico', price: 100 },
    { name: 'Paquete Estándar', price: 200 },
    { name: 'Paquete Premium', price: 300 }
  ];

  updatePrice(packageToUpdate: any) {
    if (packageToUpdate.price <= 0) {
      alert('El precio debe ser un número positivo.');
      return;
    }

    // Simulando una actualización en la lista local
    const index = this.packages.findIndex(pkg => pkg.name === packageToUpdate.name);
    if (index !== -1) {
      this.packages[index].price = packageToUpdate.price;
      console.log('Actualizando precio del paquete:', packageToUpdate);
      alert(`El precio del paquete ${packageToUpdate.name} ha sido actualizado a ${packageToUpdate.price}`);
    }
  }
}