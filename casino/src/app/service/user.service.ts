import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Profile } from '../interfaces/profile';
import { oldPassword } from '../interfaces/oldPassword';
import { oldProfile } from '../interfaces/oldProfile';

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

  //Login usuario
  loginUser(username: string, password: string): Observable<Object> {
    return this.httpClient.post(`http://localhost:8080/casino/login`, { username, password });
  }

  //Registrar Usuario
  registerUser(user: User): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/casino/saveUser`, user);
  }

  //Obtener Usuario por ID
  getUserById(token: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/casino/navbar/${token}`);
  }

  getProfile(token: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/casino/profile/${token}`);
  }

  //Actualizar Password
  updatePassword(token: string, oldPassword: oldPassword): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/casino/updatePassword/${token}`, oldPassword);
  }

  //Actualizar Perfil
  updateProfile(token: string, oldProfile: oldProfile): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/casino/updateProfile/${token}`, oldProfile);
  }

  // Eliminar Usuario
  deleteUser(token: string): Observable<Object> {
    return this.httpClient.delete(`http://localhost:8080/casino/deleteUser/${token}`);
  }

}
