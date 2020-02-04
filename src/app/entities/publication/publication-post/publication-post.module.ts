import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationPostRoutingModule } from './publication-post-routing.module';
import { PublicationPostComponent } from './publication-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CapitalizadoPipe } from 'src/app/pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    PublicationPostComponent,
    CapitalizadoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PublicationPostRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzToolTipModule
  ]
})
export class PublicationPostModule { }
