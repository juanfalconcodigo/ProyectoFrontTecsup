import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationGetRoutingModule } from './publication-get-routing.module';
import { PublicationGetComponent } from './publication-get.component';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [
    PublicationGetComponent
  ],
  imports: [
    CommonModule,
    PublicationGetRoutingModule,
    NzTagModule
  ]
})
export class PublicationGetModule { }
