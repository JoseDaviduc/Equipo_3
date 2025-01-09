import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { GetEvento } from '../shared/Models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<GetEvento[]> {
    return this.http.get<any>(this.apiUrl + '/eventos').pipe(
      map(response => response.data) // Aquí estamos extrayendo los datos desde 'data'
    );
  }


  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eventos/${id}`).pipe(
      map(response => {
        return { message: 'Evento eliminado exitosamente.' };
      }),
      catchError(error => {
        console.error('Error eliminando el evento', error);
        return throwError(() => new Error('Error eliminando el evento.'));
      })
    );
  }
}