import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  token: string = '';
  user: any = {};
  validations: any = {
    register: {}
  };


  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.saveUser();
  }

  goToHome() {
    this.router.navigate(['home']);
  }


  saveUser() {
    if (!this.user.name || this.user.name.length < 3) {
      this.validations.register.name = false;
      return;
    } else {
      this.validations.register.name = true;
    }

    if (!this.user.username || this.user.username.length < 3) {
      this.validations.register.username = false;
      return;
    } else {
      this.validations.register.username = true;
    }

    if (!this.user.email || !this.validateMail(this.user.email)) {
      this.validations.register.email = false;
      return;
    } else {
      this.validations.register.email = true;
    }

    if (!this.user.password || this.user.password.length < 3) {
      this.validations.register.password = false;
      return;
    } else {
      this.validations.register.password = true;
    }

    console.log(this.user);
    this.userService.registerUser(this.user).subscribe(dato => {
      console.log(dato);
      this.cookieService.set('token', dato.token);
      this.goToHome();
    }, error => {
      console.log(error);
    });
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
