import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { EditProfileComponent } from './componentes/edit-profile/edit-profile.component';
import { EditBetsComponent } from './componentes/edit-bets/edit-bets.component';
import { CreateBetsComponent } from './componentes/create-bets/create-bets.component';

const routes: Routes = [];

const approutes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit_profile', component: EditProfileComponent },
  { path: 'edit_bets', component: EditBetsComponent },
  { path: 'create_bets', component: CreateBetsComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
