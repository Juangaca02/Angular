import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../interfaces/user';
import { BetService } from '../../service/bet.service';
import { betHome } from '../../interfaces/betHome';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'casino';
  token: string = '';
  users: User[];
  profile: Profile;
  betHome: betHome[];
  betRoulette: betHome[];
  betPoker: betHome[];

  constructor(
    private router: Router,
    private userService: UserService,
    private betService: BetService,
    private cookieService: CookieService
  ) {
    this.token = this.cookieService.get('token');
  }

  ngOnInit(): void {
    this.obtenerUsers();
    this.obtenerBetsRoulette();
    this.obtenerBetsPoker();
    this.getProfile();
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  edit_bets(id: number) {
    this.router.navigate(['/edit_bets', id]);
  }

  obtenerUsers() {
    this.userService.obtenerListaDeUsuarios().subscribe(dato => {
      this.users = dato;
      //console.log(this.users);
    })
  }

  obtenerBetsRoulette() {
    this.betService.findBetByGameId(1).subscribe((dato: any) => {
      this.betRoulette = dato;
      console.log(this.betRoulette);
    },
      error => {
        console.log(error);
      });
  }

  obtenerBetsPoker() {
    this.betService.findBetByGameId(2).subscribe((dato: any) => {
      this.betPoker = dato;
    },
      error => {
        console.log(error);
      });
  }

  getProfile() {
    this.userService.getProfile(this.token).subscribe((dato: any) => {
      this.profile = dato;
    },
      error => {
        console.log(error);
      });
  }

  obtenerBets() {
    if (this.token) {
      this.betService.findListBetsById(this.token).subscribe((dato: any) => {
        this.betHome = dato;
      },
        error => {
          console.log(error);
        });
    }
  }
}
