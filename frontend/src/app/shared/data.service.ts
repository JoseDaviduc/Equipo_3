import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = ''; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  obtenerPaquetes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/eventos`);
  }

  actualizarPaquete(paqueteId: number, datosActualizados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/eventos/${paqueteId}`, datosActualizados);
  }

  registrarEvento(evento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/eventos`, evento);
  }
}
