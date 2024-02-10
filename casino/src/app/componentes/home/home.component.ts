import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'casino';

  constructor(private router: Router) { }

  changeTitle() {
    this.title = 'Hola Sirvo';
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
