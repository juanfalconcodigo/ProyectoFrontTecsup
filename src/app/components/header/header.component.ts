import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  userSubscription:Subscription=null;
  user:User=null;
  constructor(private _userService:UserService,private store:Store<AppState>) { }

  ngOnInit() {
    this.userSubscription=this.store.select('auth').subscribe((res:any)=>{
      this.user=new User(res.user);
      console.log(this.user);
    },(err)=>{
      console.log('No se encontro data',err)
    });
  }
  logout(){
    console.log('salir');
    this._userService.logout();
  }
  ngOnDestroy():void{
    this.userSubscription.unsubscribe();
  }

}
