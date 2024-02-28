import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BetService } from '../../service/bet.service';
import { CookieService } from 'ngx-cookie-service';
import { betHome } from '../../interfaces/betHome';
import { Bet } from '../../interfaces/bet';

@Component({
  selector: 'app-edit-bets',
  templateUrl: './edit-bets.component.html',
  styleUrl: './edit-bets.component.css'
})
export class EditBetsComponent {
  token: string = '';
  bet: any;
  betEdit: betHome;
  editOldBet: Bet = {
    id: 0,
    user_id: 0,
    game_id: 0,
    description_bet: '',
    amount_bet: 0
  };
  loading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private betService: BetService,
    private cookieService: CookieService
  ) {
    this.token = this.cookieService.get('token');
  }

  ngOnInit() {
    this.obtenerBetsById();
  }

  obtenerBetsById() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.betService.findBetById(parseInt(id, 10)).subscribe((dato: any) => {
        this.betEdit = dato;
        this.editOldBet.amount_bet = this.betEdit.balance;
        this.editOldBet.description_bet = this.betEdit.description;
        console.log(this.betEdit);
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



  onSubmit() {
    this.updateBetByID();
    this.router.navigate(['profile']);
  }

  updateBetByID() {
    // this.betService.updateBet(this.editOldBet).subscribe((dato: any) => {
    //   console.log(dato);
    // })
    this.editOldBet.id = this.betEdit.id;
    this.editOldBet.user_id = this.betEdit.user_id;
    if (this.betEdit.nameGame == 'Roulette') {
      this.editOldBet.game_id = 1;
    } else if (this.betEdit.nameGame == 'Poker') {
      this.editOldBet.game_id = 2;
    }
    this.betService.updateBet(this.editOldBet).subscribe((dato: any) => {
      console.log(dato);
    })
  }
}