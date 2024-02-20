import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user!: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }


  saveUser() {
    this.userService.registerUser(this.user).subscribe(dato => {
      console.log(dato);
      this.goToHome();
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.saveUser();
  }

  goToHome() {
    this.router.navigate(['home']);
  }

}
