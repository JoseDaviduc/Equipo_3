import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-paquete',
  templateUrl: './crear-paquete.component.html',
  styleUrls: ['./crear-paquete.component.css']
})
export class CrearPaqueteComponent {
  eventForm: FormGroup;
  totalPrice: number = 0;

  // Precios para cada opción de los combo boxes y elementos
  furniturePricePerPiece = 1500;
  balloonStripPrice = 300;
  basicReceptionPrice = 800;
  tunnelLightsPrice = 1800;
  ledCeilingPrice = 1800;
  mainTableDecorationPrice = 1800;
  sweetTableDecorationNoCandyPrice = 800;
  sweetTableDecorationWithCandyPrice = 3000;
  djPrice = 1500;
  liveMusicPrice = 2500;
  photoVideoPrice = 2000;
  kidsAnimationPrice = 1000;
  photoSetPrice = 700;
  characterPrice = 600;

  // Opción de colores y personajes
  lightColors = ['Azul', 'Rojo', 'Dorado', 'Morado'];
  characters = ['Peppa', 'Elsa de Frozen', 'Masha', 'Winnie Pooh', 'Pocoyo'];

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      clientName: [''],
      clientPhone: [''],
      clientEmail: [''],
      eventDate: [''],
      startTime: [''],
      endTime: [''],
      eventLocation: [''],
      balloonColors: [''],
      furnitureCustomization: ['1'], // Default: 1 pieza
      lightCustomization: ['Azul'],
      ceilingCustomization: ['Azul'],
      tableDecorationStyle: [''],
      selectedCharacters: [[]], // Para personajes seleccionados
    });
  }

  // Método para manejar el checkbox y actualizar el precio total
  onCheckboxChange(event: any, price: number) {
    if (event.target.checked) {
      this.totalPrice += price;
    } else {
      this.totalPrice -= price;
    }
  }

  // Método para manejar el cambio de selección de muebles
  onFurnitureChange(event: any) {
    const quantity = +event.target.value;
    this.totalPrice += quantity * this.furniturePricePerPiece;
  }

  // Método para manejar los personajes temáticos seleccionados
  onCharacterChange(event: any) {
    const selectedCharacters = this.eventForm.get('selectedCharacters')!.value;
    const isChecked = event.target.checked;
    const character = event.target.value;

    if (isChecked) {
      this.totalPrice += this.characterPrice;
      selectedCharacters.push(character);
    } else {
      this.totalPrice -= this.characterPrice;
      const index = selectedCharacters.indexOf(character);
      if (index > -1) {
        selectedCharacters.splice(index, 1);
      }
    }
  }

  // Método para guardar los datos del formulario
  guardarFormulario() {
    if (this.eventForm.valid) {
      console.log('Formulario guardado:', this.eventForm.value);
      alert(`Formulario guardado exitosamente!\nTotal: $${this.totalPrice}`);
    } else {
      alert('Por favor, completa todos los campos requeridos antes de guardar.');
    }
  }
}

