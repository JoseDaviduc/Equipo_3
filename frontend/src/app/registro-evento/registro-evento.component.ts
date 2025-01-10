import { Component } from '@angular/core';
import { EventoService } from '../evento.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { emailValidator } from '../shared/validators/email.validator';
import { lengthValidator } from '../shared/validators/lengthValidator';
import { makeRequired } from '../shared/validators/makeRequired.validator';
import { nameValidator } from '../shared/validators/nameValidator';
import { phoneNumberValidator } from '../shared/validators/phoneNumber.Validator';

@Component({
  selector: 'app-registro-evento',
  templateUrl: './registro-evento.component.html',
  styleUrls: ['./registro-evento.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})

export class RegistroEventoComponent {
  eventForm: FormGroup;
  eventoguardado: boolean = false;

  constructor(private fb: FormBuilder, private eventoService: EventoService) {
    this.eventForm = this.fb.group({
      nombre: ['', [makeRequired, nameValidator, lengthValidator({ min: 3, max: 50 })]],
      telefono: ['', [makeRequired, phoneNumberValidator(),]],
      correo: ['', [emailValidator(), lengthValidator({ min: 10, max: 30 }) ]],
      fecha_evento: ['', [makeRequired]],
      hora_inicio: ['', [makeRequired]],
      numero_hora: ['', [makeRequired, Validators.min(1), Validators.max(24)]],
      direccion_evento: ['', [makeRequired, lengthValidator({ min: 5, max: 100 })]],
      tipo_evento: ['', [makeRequired]]
    });
  }

  submitSurvey() {
    if (this.eventForm.valid) {

      this.eventoService.agregarEvento(this.eventForm.value);
      console.log('Datos de la encuesta enviados:', this.eventForm.value);
      this.eventoguardado = true;
      setTimeout(() => {
        this.eventoguardado = false;
      }, 2000);

      this.resetForm();
    } else {
      console.log('Formulario inválido');
      this.markAllAsTouched();
    }
  }


  markAllAsTouched() {
    Object.keys(this.eventForm.controls).forEach(field => {
      const control = this.eventForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }


  resetForm() {
    this.eventForm.reset({
      nombre: '',
      telefono: '',
      correo: '',
      fecha_evento: '',
      hora_inicio: '',
      numero_hora: '',
      direccion_evento: '',
      tipo_evento: ''
    });
  }
}