import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bet } from '../interfaces/bet';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  private baseURL = "http://localhost:8080/casino/obtenertodos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeBets(): Observable<Bet[]> {
    return this.httpClient.get<Bet[]>(`http://localhost:8080/casino/findAllBet`);
  }

}
