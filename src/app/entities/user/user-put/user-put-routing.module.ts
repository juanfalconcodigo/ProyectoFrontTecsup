import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPutComponent } from './user-put.component';



const routes: Routes = [
  {path:'',component:UserPutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPutRoutingModule { }
