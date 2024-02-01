import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {

  nombre = "Miguel"

  cursoAlumno = "Elige un curso"
  setCursoUsuario(evento: Event) {
    console.log(evento)
    if ((<HTMLInputElement>evento.target).value == '1') {
      this.cursoAlumno = "Soy de primero"
    } else {
      this.cursoAlumno = "Soy de segundo"
    }
  }

  cambiarNombre(evento: Event) {
    this.nombre = (<HTMLInputElement>evento.target).value
  }
}
