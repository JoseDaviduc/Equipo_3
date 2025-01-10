import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventService } from 'src/app/services/events.service';
import { GetEvento } from 'src/app/shared/Models/Evento';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css'],
  standalone:true,
  imports:[CommonModule, RouterModule]
})
export class EventRegistrationComponent implements OnInit {
  events: GetEvento[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      data => {
        console.log('Datos de eventos: ', data);
        this.events = data;
      },
      error => {
        console.error('Error al obtener eventos: ', error);
      }
    );
  }

  viewEvent(event: GetEvento): void {
    console.log('Ver evento:', event);
  }

  editEvent(event: GetEvento): void {
    console.log('Editar evento:', event);
  }


  onDeleteEvent(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      this.eventService.deleteEvent(id).subscribe({
        next: response => {
          console.log(response.message);
          this.events = this.events.filter(event => event.id !== id);
        },
        error: err => console.error('Error eliminando el evento:', err)
      });
    }
  }
}