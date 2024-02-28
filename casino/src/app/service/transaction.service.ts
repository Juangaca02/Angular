import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }

  findTransactionUserById(token: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/casino/findTransactionUserById/${token}`);
  }

  insertTransaction(transaction: transaction): Observable<any> {
    return this.httpClient.put("http://localhost:8080/casino/saveTransaction", transaction);
  }
}
