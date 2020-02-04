import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationPostComponent } from './publication-post.component';


const routes: Routes = [
  {path:'',component:PublicationPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationPostRoutingModule { }
