import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from './evento.interface';


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

  evento: Evento = {
    numero_telefono: '',
    fecha_evento: '',
    hora_evento: '',
    duracion_evento: '',
    ubicacion_evento: '',
    decoracion_principal: '',
    paquete_mampara_cuadrada: '',
    paquete_mampara_circular: '',
    tunel_de_luces_led: '',
    telas_de_decoracion: '',
    numero_de_colores_de_las_telas: null,
    colores_de_las_telas: '',
    paquete_de_sillones: '',
  };
  apiUrl = 'http://127.0.0.1:8000/diseniopaquetes/';
  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  formData = {
    phone: '',
    date: '',
    time: '',
    duration: 1,
    location: '',
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

  selectedDecoracionPrincipal: DecorOption | null = null;
  selectedMamparaCuadrada: DecorOption | null = null;
  selectedMamparaCircular: DecorOption | null = null;

  constructor(private http: HttpClient) { }

  isOptionDisabled(option: DecorOption): boolean {
    const selectedCount = this.decorOptions1.filter(opt => opt.selected).length;
    return selectedCount >= 2 && !option.selected;
  }

  calculateTotal(): number {
    let total = 0;

    this.decorOptions1.forEach(option => {
      if (option.selected) total += option.price;
    });

    if (this.selectedDecoracionPrincipal) total += this.selectedDecoracionPrincipal.price;
    if (this.selectedMamparaCuadrada) total += this.selectedMamparaCuadrada.price;
    if (this.selectedMamparaCircular) total += this.selectedMamparaCircular.price;

    if (this.formData.tunnel) total += 1800;

    if (this.formData.tela === 'luces') total += 1800;
    if (this.formData.tela === 'sinLuces') total += 1300;

    if (this.formData.sofa) total += 1500;

    return total;
  }

  onSubmit() {
    this.evento.numero_telefono = this.formData.phone;
    this.evento.fecha_evento = this.formData.date;
    this.evento.hora_evento = this.formData.time;
    this.evento.duracion_evento = ""+this.formData.duration+" horas";
    this.evento.ubicacion_evento = this.formData.location;
    this.evento.decoracion_principal = this.selectedDecoracionPrincipal ? this.selectedDecoracionPrincipal.name : null;
    this.evento.paquete_mampara_cuadrada = this.selectedMamparaCuadrada ? this.selectedMamparaCuadrada.name : null;
    this.evento.paquete_mampara_circular = this.selectedMamparaCircular ? this.selectedMamparaCircular.name : null;
    this.evento.tunel_de_luces_led = this.formData.tunnel ? 'Si' : 'No';
    this.evento.telas_de_decoracion = this.formData.tela;
    this.evento.numero_de_colores_de_las_telas = this.formData.numColors.toString();
    this.evento.colores_de_las_telas = this.formData.colorDetails;
    this.evento.paquete_de_sillones = this.formData.sofa ? 'Si' : 'No';
  

    this.http.post<Evento>(this.apiUrl, this.evento).subscribe(response => {
      console.log('Evento creado:', response);
      this.mensajeExito = 'Evento creado con éxito';
      this.mensajeError = null;
    }, error => {
      console.error('Error al crear el evento:', error);
      this.mensajeExito = null;
      this.mensajeError = 'Error al crear el evento' + error;
    });
    console.log('Formulario enviado:', this.formData, this.tunnelColors);
    alert('Formulario enviado con éxito. Total: ' + this.calculateTotal());
  }
}
