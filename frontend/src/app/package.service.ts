// package.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'http://localhost:8000'; // URL de la API

  constructor(private http: HttpClient) { }

  // Obtener paquetes
  getPackages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/eventos`);
  }

  // Actualizar paquete
  updatePackage(updatedPackage: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/eventos/${updatedPackage.id}`, updatedPackage);
  }
}
