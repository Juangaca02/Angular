import { ApiServiceService } from './../../servicios/api-service.service';
import { Component } from '@angular/core';
import { Modulo } from '../../interfaces/modulo';


@Component({
  selector: 'app-peticionget',
  templateUrl: './peticionget.component.html',
  styleUrls: ['./peticionget.component.css']
})
export class PeticiongetComponent {
  modulo:Modulo[]=[];

  // inyectar el servicio en el constructor
  constructor(private listarmodulos:ApiServiceService){

  }

  //nos suscribimos al servicio
  ngOnInit(): void{
    this.listarmodulos.listarModulos().subscribe(modulo=>{
      (this.modulo=modulo);console.log(modulo)});
    }

}


