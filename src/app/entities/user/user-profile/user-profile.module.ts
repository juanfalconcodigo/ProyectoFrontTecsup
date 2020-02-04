import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';

import { UserProfileComponent } from './user-profile.component';
import { CardProfileComponent } from '../../../components/card-profile/card-profile.component';
import { CardSkillsComponent } from '../../../components/card-skills/card-skills.component';
import { CardCountsComponent } from '../../../components/card-counts/card-counts.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    CardProfileComponent,
    CardSkillsComponent,
    CardCountsComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
