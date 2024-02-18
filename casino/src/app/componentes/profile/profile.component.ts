import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  edit_profile() {
    this.router.navigate(['edit_profile']);
  }

}
