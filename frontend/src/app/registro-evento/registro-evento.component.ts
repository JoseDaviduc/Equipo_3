// src/app/registro-evento/registro-evento.component.ts
import { Component } from '@angular/core';
import { EventoService } from '../evento.service'; // Importa el servicio
import { Evento } from '../shared/Models/Evento';

// Definir la interfaz para los datos del formulario

@Component({
  selector: 'app-registro-evento',
  templateUrl: './registro-evento.component.html',
  styleUrls: ['./registro-evento.component.css']
})

export class RegistroEventoComponent {
  surveyData: Evento = {
    nombre: '',
    telefono: '',
    correo: '',
    fecha_evento: '',
    hora_inicio: '',
    hora_fin: '',
    direccion_evento: '',
    tipo_evento: ''
  };

  constructor(private eventoService: EventoService) {} // Inyecta el servicio

  submitSurvey() {
    // Enviar los datos del formulario al servicio
    this.eventoService.agregarEvento({ ...this.surveyData });
    console.log('Datos de la encuesta enviados:', this.surveyData);

    // Limpiar el formulario
    this.surveyData = {
      nombre: '',
      telefono: '',
      correo: '',
      fecha_evento: '',
      hora_inicio: '',
      hora_fin: '',
      direccion_evento: '',
      tipo_evento: ''
    };
  }
}
