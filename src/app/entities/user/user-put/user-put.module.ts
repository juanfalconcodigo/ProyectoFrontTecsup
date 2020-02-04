import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPutRoutingModule } from './user-put-routing.module';
import { UserPutComponent } from './user-put.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import{ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    UserPutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserPutRoutingModule,
    NzAvatarModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzIconModule,
    NzToolTipModule
  ]
})
export class UserPutModule { }
