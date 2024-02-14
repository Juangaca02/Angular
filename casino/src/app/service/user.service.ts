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

  //Crear usuario
  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`http://localhost:8080/casino/createUser`, user);
  }

  //Registrar Usuario
  registerUser(user: User): Observable<Object> {
    return this.httpClient.post(`http://localhost:8080/casino/saveUser`, user);
  }

  //Obtener Usuario
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8080/casino/findUserById/${id}`);
  }

  //Actualizar Usuario
  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`http://localhost:8080/casino/updateUser/${id}`, user);
  }

  //Eliminar Usuario
  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:8080/casino/saveUser/${id}`);
  }

}