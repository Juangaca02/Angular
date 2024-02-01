import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

//const routes: Routes = [];
const appRoutes:Routes=[
  {path:'ListarUsuarios',component:ListarUsuariosComponent},
  {path:'CrearUsuarios',component:ListarUsuariosComponent},
  {path:'',redirectTo:'/ListarUsuarios', pathMatch:'full'},
  {path:'**',component: PrincipalComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
