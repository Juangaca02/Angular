import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../interfaces/user';
import { BetService } from '../../service/bet.service';
import { Bet } from '../../interfaces/bet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'casino';
  token: string = '';
  users: User[];
  bets: Bet[];

  constructor(
    private router: Router,
    private userService: UserService,
    private betService: BetService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.obtenerUsers();
    this.obtenerBets();
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  private obtenerUsers() {
    this.userService.obtenerListaDeUsuarios().subscribe(dato => {
      this.users = dato;
      //console.log(this.users);
    })
  }

  private obtenerBets() {
    this.betService.obtenerListaDeBets().subscribe(dat => {
      this.bets = dat;
      //console.log(this.bets);
    })
  }




}
