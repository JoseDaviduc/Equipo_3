import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventService} from 'src/app/services/events.service';
import { getPaquetes} from 'src/app/shared/Models/Evento';

@Component({
  selector: 'app-paquetes-creados',
  templateUrl: './paquetes-creados.component.html',
  styleUrls: ['./paquetes-creados.component.css'],
    standalone:true,
    imports:[CommonModule, RouterModule]
})
export class PaquetesCreadosComponent implements OnInit {


  paquetes: getPaquetes[] = [];

  constructor(private paqueteService: EventService) { }

  ngOnInit(): void {
    this.getPaquetes();
  }

  // Método para obtener los paquetes
  getPaquetes(): void {
    this.paqueteService.getPaquetes().subscribe(
      response => {
        this.paquetes = response.data;
      },
      error => {
        console.error('Error al obtener los paquetes', error);
      }
    );
  }

  onDeletePaquete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este paquete?')) {
      this.paqueteService.deletePaquete(id).subscribe({
        next: response => {
          console.log(response.message);
          this.paquetes = this.paquetes.filter(event => event.id !== id);
        },
        error: err => console.error('Error al eliminar paquete:', err)
      });
    }
  }
}