import { ApiServiceService } from './../../servicios/api-service.service';
import { Component } from '@angular/core';
import { Modulo } from '../../interfaces/modulo';


@Component({
  selector: 'app-peticionput',
  templateUrl: './peticionput.component.html',
  styleUrls: ['./peticionput.component.css']
})
export class PeticionputComponent {
  modulo:Modulo[]=[];

  // inyectar el servicio siempre en el constructor a través de la variable actualizarmodulo
  constructor(private actualizarmodulo:ApiServiceService){
  }

  //se suscribe al observable que devuelve el método updateModulo del servicio
  actualizarModulo(mod: Modulo) {
    this.actualizarmodulo.updateModulo(mod).subscribe();
  }


  ngOnInit(): void{

  }

}
