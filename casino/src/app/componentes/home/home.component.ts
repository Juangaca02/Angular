import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'casino';

  users: User[];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.obtenerUsers();
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  private obtenerUsers() {
    this.userService.obtenerListaDeUsuarios().subscribe(dato => {
      this.users = dato;
    })
  }




}
