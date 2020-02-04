import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { ObjUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent implements OnInit,OnDestroy {
  userSubscription:Subscription=null;
  constructor(private store:Store<AppState>) { }
  user:ObjUser=null;
  ngOnInit() {
    this.userSubscription=this.store.select('auth').subscribe((auth)=>{
      this.user=auth.user;
      console.log(this.user);
    })
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
