import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-paquete',
  templateUrl: './crear-paquete.component.html',
  styleUrls: ['./crear-paquete.component.css']
})
export class CrearPaqueteComponent {
  eventForm: FormGroup;
  totalPrice: number = 0;
  currentStep = 1;

  // Precios de los elementos de decoración y servicios adicionales
  balloonStripPrice = 300;
  basicReceptionPrice = 800;
  furniturePricePerPiece = 200;  // Precio por pieza de mobiliario
  tunnelLightsPrice = 1800;
  ledCeilingPrice = 1800;  // Techo con luces LED y telas
  mainTableDecorationPrice = 1800;
  sweetTableDecorationNoCandyPrice = 800;  // Decoración para mesa de dulces (sin dulces)
  sweetTableDecorationWithCandyPrice = 3000;  // Decoración para mesa de dulces (con dulces incluidos)
  djPrice = 1500;  // DJ para el evento
  liveMusicPrice = 2500;  // Música en vivo
  photoVideoPrice = 2000;  // Fotografía y video
  kidsAnimationPrice = 1000;  // Animación para niños
  photoSetPrice = 700;  // Set para tomarse fotos

  // Colores de luces disponibles para la personalización
  lightColors = ['Rojo', 'Morado', 'Dorado', 'Amarillo', 'Rosado'];

  // Personajes disponibles para agregar temáticas
  characters = ['Personaje A', 'Personaje B', 'Personaje C'];

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      clientName: ['', Validators.required],
      clientPhone: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      eventDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      eventLocation: ['', Validators.required],
      guestCount: [''],
      balloonColors: [''],
      furnitureCustomization: [''],  // Personalización de muebles
      tunnelLights: [false],  // Checkbox para túnel de luces
      lightCustomization: [''],  // Personalización de luces
      ledCeiling: [false],  // Checkbox para techo con luces LED
      ceilingCustomization: ['']  // Personalización de colores del techo
    });
  }

  // Cambiar entre pasos en el formulario
  goToStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Manejar los cambios en los checkbox para calcular el precio
  onCheckboxChange(event: any, price: number) {
    if (event.target.checked) {
      this.totalPrice += price;
    } else {
      this.totalPrice -= price;
    }
  }

  // Manejar los cambios en la personalización de muebles
  onFurnitureChange(event: any) {
    const selectedPieces = event.target.value;
    this.totalPrice += (selectedPieces * this.furniturePricePerPiece);
  }

  // Manejar los cambios de selección de personajes temáticos
  onCharacterChange(event: any) {
    const selectedCharacter = event.target.value;
    console.log('Personaje seleccionado:', selectedCharacter);
    // Aquí puedes agregar cualquier lógica adicional para manejar los personajes seleccionados
  }

  // Guardar el formulario
  guardarFormulario() {
    console.log('Formulario enviado:', this.eventForm.value);
    console.log('Precio total:', this.totalPrice);
    // Aquí podrías enviar los datos al servidor o procesarlos como necesites
  }
}
