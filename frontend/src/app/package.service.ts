// package.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'http://localhost:3000/packages'; // URL de la API

  constructor(private http: HttpClient) { }

  // Obtener paquetes
  getPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Actualizar paquete
  updatePackage(updatedPackage: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${updatedPackage.id}`, updatedPackage);
  }
}
