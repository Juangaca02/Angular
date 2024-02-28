import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Profile } from '../../interfaces/profile';
import { oldPassword } from '../../interfaces/oldPassword';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {


  token: string = '';
  profiles: Profile;
  loading: boolean = true;
  allGood: boolean = true;
  oldPassword: oldPassword = {
    oldPassword: '',
    password: '',
    confirmPassword: ''
  }

  validation: any = {
    password: {}
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) {
    this.token = this.cookieService.get('token');
  }


  ngOnInit() {
    this.editProfileUser();
  }

  editProfileUser() {
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

  onSubmit(tipo: string) {
    if (tipo === 'perfil') {

    } else if (tipo === 'pass') {
      console.log("PIno");

      this.updatePassword();
      if (this.allGood == true) {
        console.log("PIno2");

        this.router.navigate(['profile']);
      }
    }
  }

  updatePassword() {
    if (this.oldPassword.password !== this.oldPassword.confirmPassword) {
      this.validation.password.password = false;
      return;
    } else {
      this.validation.password.password = true;
    }
    if (this.token) {
      this.userService.updatePassword(this.token, this.oldPassword).subscribe((dato: any) => {
        this.allGood = true;
        if (dato == false) {
          this.validation.password.oldPassword = false;
          this.allGood = false;
        }



      }, error => {
        console.log(error);
      }
      )
    }
  }



}