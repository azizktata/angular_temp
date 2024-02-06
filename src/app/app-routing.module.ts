import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LandpageComponent } from './modules/home/components/landpage/landpage.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home/table1', pathMatch: 'full' },

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
