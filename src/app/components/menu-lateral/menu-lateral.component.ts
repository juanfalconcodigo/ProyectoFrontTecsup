import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
import { ObjUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit,OnDestroy {

  user:ObjUser=null;
  userSubscription:Subscription=null;
  //ojo los nombres de los iconos los estamos sacando de fontawesome
  rutas:any[]=[
   {
    name:'On-line',
    path:'user/get',
    icon:'fas fa-users'
   },
   {
    name:'Chat',
    path:'chat',
    icon:'far fa-comments'
   },
   {
    name:'Publicación',
    path:'publication/create',
    icon:'far fa-file-image'
   }
  ]
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.userSubscription=this.store.select('auth').subscribe((auth)=>{
      this.user=auth.user;
      console.log(this.user);

    });
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
