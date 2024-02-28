import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NavigationStart, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Profile } from '../../interfaces/profile';
import { BetService } from '../../service/bet.service';
import { betHome } from '../../interfaces/betHome';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private betService: BetService,
    private cookieService: CookieService
  ) {
    this.token = this.cookieService.get('token');
  }
  token: string = '';
  profiles: Profile;
  betProfile: betHome[];
  betEdit: betHome[];
  loading: boolean = true;
  showConfirmationPopup: boolean = false;

  ngOnInit() {
    console.log(this.token);
    this.perfilUser();
    this.obtenerBets();
  }

  edit_profile() {
    this.router.navigate(['edit_profile']);
  }
  edit_bets(id: number) {
    this.router.navigate(['/edit_bets', id]);
  }
  create_bets() {
    this.router.navigate(['create_bets']);
  }

  perfilUser() {
    if (this.token) {
      this.userService.getProfile(this.token).subscribe((dato: any) => {
        this.profiles = dato;
        //console.log(this.profiles);
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

  obtenerBets() {
    if (this.token) {
      this.betService.findListBetsById(this.token).subscribe((dato: any) => {
        this.betProfile = dato;
        //console.log(dato);
      },
        error => {
          console.log(error);
        });
    }
  }

  obtenerBetsById(id: number) {
    if (this.token) {
      this.betService.findBetById(id).subscribe((dato: any) => {
        this.betEdit = dato;
        //console.log(dato);
      })
    }
  }

  deleteBet(id: number) {
    this.betService.deleteBet(id).subscribe((dato: any) => { })
    window.location.reload();
  }

  goToHome() {
    this.router.navigate(['home']);
  }
  deleteUser() {
    this.userService.deleteUser(this.token).subscribe((dato: any) => { })
    this.cookieService.delete('token');
    this.goToHome();
  }

  showPopUp() {
    this.showConfirmationPopup = true;
  }

  cancelDelete() {
    this.showConfirmationPopup = false;
  }
}