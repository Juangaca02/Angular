import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../service/user.service';
import { NavigationStart, Router } from '@angular/router';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) { }
  token: string = '';
  profiles: Profile;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.token = this.cookieService.get('token');
        this.usuarioAhora();
      }
    });
  }

  edit_profile() {
    this.router.navigate(['edit_profile']);
  }

  usuarioAhora() {
    if (this.token) {
      this.userService.getUserById(this.token).subscribe((dato: any) => {
        this.profiles = dato;
      },
        error => {
          console.log(error);
        });
    }
  }

}
