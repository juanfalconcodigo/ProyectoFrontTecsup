import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit,OnDestroy {
  listUserSubscription:Subscription=null;
  data:any[]=[];
  constructor(private _chatService:ChatService) { }

  ngOnInit() {
    this.listUserSubscription=this._chatService.getUsersActive().subscribe((res:any[])=>{
      this.data=res;
      console.log(res);
    });
    this._chatService.emitUsersActive();
  }
  ngOnDestroy(){
    this.listUserSubscription.unsubscribe();
  }

}
