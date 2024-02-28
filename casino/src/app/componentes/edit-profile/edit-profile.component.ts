import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Profile } from '../../interfaces/profile';
import { oldPassword } from '../../interfaces/oldPassword';
import { oldProfile } from '../../interfaces/oldProfile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {


  token: string = '';
  profiles: Profile;
  loading: boolean = true;
  allGood: boolean = false;
  oldProfile: oldProfile = {
    name: '',
    username: '',
    email: ''
  }
  oldPassword: oldPassword = {
    oldPassword: '',
    password: '',
    confirmPassword: ''
  }

  validation: any = {
    profile: {},
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
        this.oldProfile.name = this.profiles.name;
        this.oldProfile.username = this.profiles.username;
        this.oldProfile.email = this.profiles.email;
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

  updateProfile() {
    if (!this.oldProfile.name || this.oldProfile.name.length < 3) {
      this.validation.profile.name = false;
      return;
    } else {
      this.validation.profile.name = true;
    }

    if (!this.oldProfile.username || this.oldProfile.username.length < 3) {
      this.validation.profile.username = false;
      return;
    } else {
      this.validation.profile.username = true;
    }

    if (!this.oldProfile.email || !this.validateMail(this.profiles.email)) {
      this.validation.profile.email = false;
      return;
    } else {
      this.validation.profile.email = true;
    }
    if (this.token) {
      this.userService.updateProfile(this.token, this.oldProfile).subscribe((dato: any) => {
        this.allGood = true;
        if (dato == false) {
          this.allGood = false;
        }
      }, error => {
        console.log(error);
      }
      )
    }
  }

  onSubmit(tipo: string) {
    if (tipo === 'perfil') {
      this.updateProfile();
      if (this.allGood == true) {
        this.router.navigate(['profile']);
      }
    } else if (tipo === 'pass') {
      this.updatePassword();
      if (this.allGood == true) {
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

  validateMail(mail: string) {
    var pattronMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattronMail.test(mail)) {
      if (mail.indexOf('@') !== -1 && mail.indexOf('.') !== -1) {
        var part = mail.split('@');
        if (
          part[part.length - 1].indexOf('.') - part[part.length - 1].length !==
          -1
        ) {
          return true;
        }
      }
    }
    return false;
  }



}