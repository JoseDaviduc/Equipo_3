import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Evento } from './evento.interface';
import { makeRequired } from '../shared/validators/makeRequired.validator';
import { phoneNumberValidator } from '../shared/validators/phoneNumber.Validator';
import { lengthValidator } from '../shared/validators/lengthValidator';
import { max } from 'rxjs';
import { wordValidator } from '../shared/validators/word.validator';

interface DecorOption {
  name: string;
  price: number;
}

@Component({
  selector: 'app-crear-paquete',
  templateUrl: './crear-paquete.component.html',
  styleUrls: ['./crear-paquete.component.css'],
})
export class CrearPaqueteComponent implements OnInit {
  paqueteForm!: FormGroup;
  tunnelColors = {
    amber: false,
    white: false
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;
  apiUrl = 'http://127.0.0.1:8000/diseniopaquetes/';

  decorOptions1: DecorOption[] = [
    { name: 'Mesa Principal', price: 1800 },
    { name: 'Recepción de Mesa de Dulces', price: 3000 },
    { name: 'Recepción de Mesa sin Dulces', price: 800 },
  ];

  decorOptions2: DecorOption[] = [
    { name: 'Mampara Cuadrada Chico', price: 300 },
    { name: 'Mampara Cuadrada Mediano', price: 600 },
    { name: 'Mampara Cuadrada Grande', price: 900 },
  ];

  decorOptions3: DecorOption[] = [
    { name: 'Mampara Circular Chico', price: 300 },
    { name: 'Mampara Circular Mediano', price: 600 },
    { name: 'Mampara Circular Grande', price: 900 },
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.paqueteForm = this.fb.group({
      numero_telefono: ['', [makeRequired, phoneNumberValidator()]],
      fecha_evento: ['', [makeRequired]],
      hora_evento: ['', makeRequired],
      duracion_evento: [1, [makeRequired, Validators.min(1), Validators.max(24)]],
      ubicacion_evento: ['', [makeRequired, lengthValidator({ min: 10, max: 80 })]],
      decoracion_principal: ['', makeRequired],
      paquete_mampara_cuadrada: ['', makeRequired],
      paquete_mampara_circular: ['', makeRequired],
      tunel_de_luces_led: [false, makeRequired],
      telas_de_decoracion: ['', makeRequired],
      numero_de_colores_de_las_telas: [1, [makeRequired, Validators.min(1), Validators.max(3)]],
      colores_de_las_telas: ['', [wordValidator(),lengthValidator({min: 3, max: 20})]],
      paquete_de_sillones: [false],
      total_a_pagar_number: [0]

    });
  }

  calculateTotal(): number {
    let total = 0;

    const formValues = this.paqueteForm.value;


    const decorPrincipal = this.decorOptions1.find(option => option.name === formValues.decoracion_principal);
    if (decorPrincipal) total += decorPrincipal.price;


    const mamparaCuadrada = this.decorOptions2.find(option => option.name === formValues.paquete_mampara_cuadrada);
    if (mamparaCuadrada) total += mamparaCuadrada.price;


    const mamparaCircular = this.decorOptions3.find(option => option.name === formValues.paquete_mampara_circular);
    if (mamparaCircular) total += mamparaCircular.price;


    if (formValues.tunel_de_luces_led) total += 1800;


    if (formValues.telas_de_decoracion === 'luces') total += 1800;
    if (formValues.telas_de_decoracion === 'sinLuces') total += 1300;


    if (formValues.paquete_de_sillones) total += 1500;

    return total;
  }

  onSubmit(): void {
    if (this.paqueteForm.invalid) {
      this.markAllAsTouched(this.paqueteForm);
      this.mensajeError = 'Por favor, completa todos los campos requeridos.';
      return;
    }

    // Calcular el total a pagar antes de enviar el formulario
    const total = this.calculateTotal();

    // Crear el objeto evento con el total a pagar
    const evento: Evento = {
      ...this.paqueteForm.value,
      duracion_evento: `${this.paqueteForm.value.duracion_evento} horas`,
      total_a_pagar: total, // Asignar el total calculado
    };

    // Enviar los datos al backend
    this.http.post<Evento>(this.apiUrl, evento).subscribe(
      response => {
        console.log('Evento creado:', response);
        this.mensajeExito = 'Evento creado con éxito';
        this.mensajeError = null;
        this.paqueteForm.reset();
      },
      error => {
        console.error('Error al crear el evento:', error);
        this.mensajeExito = null;
        this.mensajeError = 'Error al crear el evento: ' + error.message;
      }
    );
  }


  private markAllAsTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control) {
        control.markAsTouched();
        control.markAsDirty();


        if ((control as any).controls) {
          this.markAllAsTouched(control as FormGroup);
        }
      }
    });
  }

}