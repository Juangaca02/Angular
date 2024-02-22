import { Component, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../service/user.service';
import { navbarUser } from '../../interfaces/navbarUser';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) {
    this.cookieService.get('token');
  }
  token: string = '';
  navbarUser: navbarUser;
  isNavbarBlurred: boolean = false;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.token = this.cookieService.get('token');
        this.usuarioAhora();
      }
    });
  }

  usuarioAhora() {
    if (this.token) {
      this.userService.getUserById(this.token).subscribe((dato: any) => {
        this.navbarUser = dato;
      },
        error => {
          console.log(error);
        });
    }
  }

  logOut() {
    this.cookieService.delete('token');
    this.router.navigate(['home']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Lógica para verificar la posición del scroll y aplicar la clase de borrosidad según sea necesario
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarBlurred = scrollPosition > 0; // Aplicar la borrosidad si la posición del scroll es mayor que 0
  }
}
