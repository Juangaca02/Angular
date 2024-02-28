import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newBet } from '../interfaces/newBet';
import { Bet } from '../interfaces/bet';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  private baseURL = "http://localhost:8080/casino/obtenertodos";

  constructor(private httpClient: HttpClient) { }

  findListBetsById(token: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/casino/findBetUserById/${token}`);
  }
  findBetByGameId(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/casino/findBetByGameId/${id}`);
  }

  findBetById(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/casino/findBetById/${id}`);
  }

  createBet(newBet: newBet): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/casino/saveBet", newBet);
  }

  updateBet(bet: Bet): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8080/casino/updateBet`, bet);
  }

  deleteBet(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/casino/deleteBet/${id}`);
  }

}
