import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../interfaces/user';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: '';
  password: '';


  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) { }

  goToRegister() {
    this.router.navigate(['register']);
  }

  login() {
    this.userService.loginUser(this.username, this.password)
      .subscribe((dato: any) => {
        this.cookieService.set('token', '' + dato.token);
        this.router.navigate(['home']);
      },
        error => {
          console.log(error);
        });

  }

}
