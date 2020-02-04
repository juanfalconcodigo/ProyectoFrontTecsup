import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationProfileRoutingModule } from './publication-profile-routing.module';
import { PublicationProfileComponent } from './publication-profile.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
@NgModule({
  declarations: [
    PublicationProfileComponent
  ],
  imports: [
    CommonModule,
    PublicationProfileRoutingModule,
    NzAvatarModule,
    NzToolTipModule
  ]
})
export class PublicationProfileModule { }
