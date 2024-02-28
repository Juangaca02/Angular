import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TransactionService } from '../../service/transaction.service';
import { transactionPage } from '../../interfaces/transactionPage';
import { UserService } from '../../service/user.service';
import { Profile } from '../../interfaces/profile';
import { transaction } from '../../interfaces/transaction';
//import { UnixDatePipe } from '../../../pipes/unix-date.pipe';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
  //providers: [UnixDatePipe]
})
export class TransactionComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private transactionService: TransactionService,
    private cookieService: CookieService
  ) {
    this.token = this.cookieService.get('token');
  }
  token: string = '';
  profiles: Profile;
  transactions: transactionPage[];
  loading: boolean = true;
  newTransaction: transaction = {
    user_id: 0,
    transaction_type: 'Ingresar',
    balance: 0,
    transaction_date: new Date()
  };
  validation: any = {};

  ngOnInit() {
    console.log(this.token);
    this.obtenerTransaction();
    this.perfilUser();
  }

  obtenerTransaction() {
    if (this.token) {
      this.transactionService.findTransactionUserById(this.token).subscribe((dato: any) => {
        this.transactions = dato;
        console.log(this.transactions);
      },
        error => {
          console.log(error);
        },
        () => {
          this.loading = false;
        }
      );
    }
  }
  perfilUser() {
    if (this.token) {
      this.userService.getProfile(this.token).subscribe((dato: any) => {
        this.profiles = dato;
      },
        error => {
          console.log(error);
        });
    }
  }
  onSubmit() {
    this.insertarTransaction();
    if (this.validation.balance) {
      window.location.reload();
    }
  }

  insertarTransaction() {
    if (this.newTransaction.balance <= 0) {
      this.validation.balance = false;
      return;
    } else {
      this.validation.balance = true;
    }
    this.newTransaction.user_id = this.profiles.id;
    this.newTransaction.transaction_date = new Date();
    console.log(this.newTransaction);
    this.transactionService.insertTransaction(this.newTransaction).subscribe((dato: any) => {
      console.log(dato);
    },
      error => {
        console.log(error);
      });
  }
}
