// src/app/evento.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Event {
  id: number;
  name: string;
  contactPhone: string;
  email: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
  eventType: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  agregarEvento(arg0: { nombre: string; telefono: string; correo: string; fecha_evento: string; hora_inicio: string; hora_fin: string; direccion_evento: string; tipo_evento: string; }) {
    throw new Error('Method not implemented.');
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

