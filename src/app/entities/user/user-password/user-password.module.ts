import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { UserPasswordRoutingModule } from './user-password-routing.module';
import { UserPasswordComponent } from './user-password.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [
    UserPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserPasswordRoutingModule,
    NzStepsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule
  ]
})
export class UserPasswordModule { }
