import { ApiServiceService } from './../../servicios/api-service.service';
import { Component } from '@angular/core';
import { Modulo } from '../../interfaces/modulo';


@Component({
  selector: 'app-peticiondelete',
  templateUrl: './peticiondelete.component.html',
  styleUrls: ['./peticiondelete.component.css']
})
export class PeticiondeleteComponent {

  modulo:Modulo[]=[];


  // inyectar el servicio en el constructor
  constructor(private borrarmodulo:ApiServiceService){
  }

  //suscripción al servicio
  borrarModulo(idModulo:number){
    this.borrarmodulo.borrarModulo(idModulo).subscribe(()=>{this.modulo=this.modulo.filter(m=>m.id!==idModulo);console.log(this.modulo)});

    }

  ngOnInit(): void{
    //this.borrarmodulo.listarModulos().subscribe(modulo=>{(this.modulo=modulo);console.log(modulo)});
  }
}
