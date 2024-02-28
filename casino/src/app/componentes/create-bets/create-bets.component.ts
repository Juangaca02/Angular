import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BetService } from '../../service/bet.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { Profile } from '../../interfaces/profile';
import { newBet } from '../../interfaces/newBet';

@Component({
  selector: 'app-create-bets',
  templateUrl: './create-bets.component.html',
  styleUrl: './create-bets.component.css'
})
export class CreateBetsComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private betService: BetService,
    private cookieService: CookieService
  ) {
    this.token = this.cookieService.get('token');
  }

  token: string = '';
  owner: Profile;
  pokerBet: newBet = {
    user_id: 0,
    game_id: 0,
    description_bet: 'carta_alta',
    amount_bet: 0
  };
  rouletteBet: newBet = {
    user_id: 0,
    game_id: 0,
    description_bet: 'straight_up',
    amount_bet: 0
  };
  validation: any = {
    poker: {},
    roulette: {}
  };
  ngOnInit() {

    console.log(this.token);
    this.obtenerUser();
  }
  obtenerUser() {
    if (this.token) {
      this.userService.getProfile(this.token).subscribe((dato: any) => {
        this.owner = dato;
        //console.log(this.profiles);
      }, error => {
        console.log(error);
      });
    }
  }

  onSubmit(tipo: string) {
    if (tipo === 'roulette') {
      this.saveRouletteBet();
      if (this.validation.roulette.amount_bet) {
        this.router.navigate(['profile']);
      }
    } else if (tipo === 'poker') {
      this.savePokerBet();
      if (this.validation.poker.amount_bet) {
        this.router.navigate(['profile']);
      }
    }
  }

  saveRouletteBet() {
    if (this.rouletteBet.amount_bet <= 0) {
      this.validation.roulette.amount_bet = false;
      return;
    } else {
      this.validation.roulette.amount_bet = true;
    }
    this.rouletteBet.user_id = this.owner.id;
    this.rouletteBet.game_id = 1;
    this.betService.createBet(this.rouletteBet).subscribe((dato: any) => {
      console.log(dato);
    }, error => {
      console.log(error);
    });
    console.log(this.rouletteBet);
  }
  savePokerBet() {
    if (this.pokerBet.amount_bet <= 0) {
      this.validation.poker.amount_bet = false;
      return;
    } else {
      this.validation.poker.amount_bet = true;
    }
    this.pokerBet.user_id = this.owner.id;
    this.pokerBet.game_id = 2;
    this.betService.createBet(this.pokerBet).subscribe((dato: any) => {
      console.log(dato);
    }, error => {
      console.log(error);
    });
    console.log(this.pokerBet);

  }


}
