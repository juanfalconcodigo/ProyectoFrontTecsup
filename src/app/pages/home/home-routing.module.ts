import { Routes } from '@angular/router';
import { UserGetComponent } from 'src/app/entities/user/user-get/user-get.component';
import { ChatComponent } from 'src/app/components/chat/chat.component';





const ROUTES_HOME:Routes=[
  {path:'user/get', component:UserGetComponent},
  {path:'chat', component:ChatComponent},
  {path:'user/edit',loadChildren:()=>import('../../entities/user/user-put/user-put.module').then((m)=>m.UserPutModule)},
  {path:'user/profile',loadChildren:()=>import('../../entities/user/user-profile/user-profile.module').then((m)=>m.UserProfileModule)},
  {path:'user/edit/password',loadChildren:()=>import('../../entities/user/user-password/user-password.module').then((m)=>m.UserPasswordModule)},
  {path:'publication/create',loadChildren:()=>import('../../entities/publication/publication-post/publication-post.module').then((m)=>m.PublicationPostModule)},
  {path:'publication/list',loadChildren:()=>import('../../entities/publication/publication-get/publication-get.module').then((m)=>m.PublicationGetModule)},
  {path:'publication/profile',loadChildren:()=>import('../../entities/publication/publication-profile/publication-profile.module').then((m)=>m.PublicationProfileModule)},
  {path:'**',pathMatch:'full',redirectTo:'user/profile'}
]
export{
  ROUTES_HOME
}

