import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationGetComponent } from './publication-get.component';

const routes: Routes = [
  {path:'',component:PublicationGetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationGetRoutingModule { }
