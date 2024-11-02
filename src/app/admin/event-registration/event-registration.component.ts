import { Component } from '@angular/core';

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

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent {
  events: Event[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      contactPhone: '(123) 456-7890',
      email: 'juan.perez@email.com',
      eventDate: '2024-12-01',
      startTime: '10:00 AM',
      endTime: '2:00 PM',
      location: 'Calle Falsa 123',
      eventType: 'Conferencia',
    },
    // Puedes agregar más eventos aquí
  ];

  viewEvent(event: Event) {
    console.log('Ver evento:', event);
  }

  editEvent(event: Event) {
    console.log('Editar evento:', event);
  }

  deleteEvent(event: Event) {
    this.events = this.events.filter(e => e.id !== event.id);
    console.log('Evento eliminado:', event);
  }
}
