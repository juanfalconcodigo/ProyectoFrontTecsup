import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationProfileComponent } from './publication-profile.component';

const routes: Routes = [
  {path:'',component:PublicationProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationProfileRoutingModule { }
