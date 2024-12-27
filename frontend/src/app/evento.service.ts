// src/app/evento.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import  { DataService } from './shared/data.service'

interface Event {
  nombre: string;
  telefono: string;
  correo: string;
  fecha_evento: string;
  hora_inicio: string;
  hora_fin: string;
  direccion_evento: string;
  tipo_evento: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  constructor(private dataService: DataService) {} // Inyecta el servicio

  agregarEvento(evento: Event) {
    this.dataService.registrarEvento(evento).
    subscribe(
      ()=> {
        console.log("ghgf");
      }
    );
  }
  private eventosSubject = new BehaviorSubject<Event[]>([]);
  eventos$ = this.eventosSubject.asObservable();

  addEvent(event: Event) {
    const currentEvents = this.eventosSubject.value;
    this.eventosSubject.next([...currentEvents, event]);
  }

  getEvents() {
    return this.eventosSubject.value;
  }
}

