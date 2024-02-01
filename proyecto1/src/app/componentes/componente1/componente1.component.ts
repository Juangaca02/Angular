import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
  nombreComp1 = "Este es el Componente 1"
  private horas = 40;
  login = 'pepito';
  ativar = 'true';
  getHoras() {
    console.log(this.horas);
    return this.horas;
  }
}
