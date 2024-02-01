import { ApiServiceService } from './../../servicios/api-service.service';
import { Component } from '@angular/core';
import { Modulo } from '../../interfaces/modulo';


@Component({
  selector: 'app-peticionpost',
  templateUrl: './peticionpost.component.html',
  styleUrls: ['./peticionpost.component.css']
})
export class PeticionpostComponent {
  modulo:Modulo[]=[];

  // inyectar el servicio en el constructor
  constructor(private listarmodulos:ApiServiceService){
  }

  //suscripción al observable al que se le indica el módulo a insertar
  agregarModulo(mod:Modulo){
    this.listarmodulos.anadirModulo(mod).subscribe((mod=>{
      this.modulo.push(mod);console.log(this.modulo)}))
  }

  ngOnInit(): void{
    //this.listarmodulos.listarModulos().subscribe(modulo=>{(this.modulo=modulo);console.log(modulo)});

  }


}
