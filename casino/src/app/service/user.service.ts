import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //URL que obtiene el listado de todos los empleados
  private baseURL = "http://localhost:8080/casino/obtenertodos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeUsuarios(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

}
