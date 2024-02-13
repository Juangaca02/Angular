import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isNavbarBlurred: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Lógica para verificar la posición del scroll y aplicar la clase de borrosidad según sea necesario
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarBlurred = scrollPosition > 0; // Aplicar la borrosidad si la posición del scroll es mayor que 0
  }
}
