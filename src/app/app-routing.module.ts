import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ROUTES_HOME } from './pages/home/home-routing.module';
//lazy loading



const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register',loadChildren:()=>import('./pages/register/register.module').then((m)=>m.RegisterModule)},
  {path:'home', component:HomeComponent,canActivate:[AuthGuardService],children:ROUTES_HOME},
  {path:'**',pathMatch:'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
