import { Component } from '@angular/core';

interface DecorOption {
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-crear-paquete',
  templateUrl: './crear-paquete.component.html',
  styleUrls: ['./crear-paquete.component.css'],
})
export class CrearPaqueteComponent {
  formData = {
    phone: '',
    date: '',
    time: '',
    duration: 1,
    tunnel: false,
    tela: '',
    numColors: 1,
    colorDetails: '',
    sofa: false,
  };

  tunnelColors = {
    amber: false,
    white: false,
  };

  decorOptions1: DecorOption[] = [
    { name: 'Mesa Principal', price: 1800, selected: false },
    { name: 'Recepción de Mesa de Dulces', price: 3000, selected: false },
    { name: 'Recepción de Mesa sin Dulces', price: 800, selected: false },
  ];

  decorOptions2: DecorOption[] = [
    { name: 'Mampara Cuadrada Chico', price: 300, selected: false },
    { name: 'Mampara Cuadrada Mediano', price: 600, selected: false },
    { name: 'Mampara Cuadrada Grande', price: 900, selected: false },
  ];

  decorOptions3: DecorOption[] = [
    { name: 'Mampara Circular Chico', price: 300, selected: false },
    { name: 'Mampara Circular Mediano', price: 600, selected: false },
    { name: 'Mampara Circular Grande', price: 900, selected: false },
  ];

  selectedMamparaCuadrada: DecorOption | null = null;
  selectedMamparaCircular: DecorOption | null = null;

  isOptionDisabled(option: DecorOption): boolean {
    const selectedCount = this.decorOptions1.filter(opt => opt.selected).length;
    return selectedCount >= 2 && !option.selected;
  }

  calculateTotal(): number {
    let total = 0;

    this.decorOptions1.forEach(option => {
      if (option.selected) total += option.price;
    });

    if (this.selectedMamparaCuadrada) total += this.selectedMamparaCuadrada.price;
    if (this.selectedMamparaCircular) total += this.selectedMamparaCircular.price;

    if (this.formData.tunnel) total += 1800;

    if (this.formData.tela === 'luces') total += 1800;
    if (this.formData.tela === 'sinLuces') total += 1300;

    if (this.formData.sofa) total += 1500;

    return total;
  }

  onSubmit() {
    console.log('Formulario enviado:', this.formData, this.tunnelColors);
    alert('Formulario enviado con éxito. Total: ' + this.calculateTotal());
  }
}
