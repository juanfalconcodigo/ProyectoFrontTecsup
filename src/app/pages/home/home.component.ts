import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';
/*antdesing*/
import { NzNotificationService } from 'ng-zorro-antd/notification';
function jsHome(){
    const activateSidebar=document.querySelector(".hamburger .fas");
    const desactivateSidebar=document.querySelector(".wrapper .sidebar .close");
    const wrapper=document.querySelector(".wrapper");
    activateSidebar.addEventListener('click',()=>{
      wrapper.classList.add("active");
    });
   /*  click(function() {
        $(".wrapper").addClass("active")
    });*/
    desactivateSidebar.addEventListener('click',()=>{
      wrapper.classList.remove("active");
    });
    /* $(".wrapper .sidebar .close").click(function() {
        $(".wrapper").removeClass("active")
    }); */

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  messagePrivateSubscription:Subscription=null;
  messagePublicSubscription:Subscription=null;
  constructor(private _userService:UserService,private spinner: NgxSpinnerService,private _chatService:ChatService,private notification: NzNotificationService) { }

  ngOnInit() {
    this.spinner.show();
    jsHome();
    this.messagePrivateSubscription=this._chatService.getMessagePrivate().subscribe((res:any)=>{
      let{first_name,message}=res;
      this.createNotification('info',first_name,message);
      console.log(res);
    });

    this.messagePublicSubscription=this._chatService.getMessagePublic().subscribe((res:any)=>{
      let{first_name,message}=res;
      this.createNotification('info',first_name,message);
      console.log(res);
     });

    
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }
  ngOnDestroy(){

    this.messagePrivateSubscription.unsubscribe();
    this.messagePublicSubscription.unsubscribe();

  }

  createNotification(type:string,first_name:string,message:string): void {
    //ojo existen varios tipos incluso hay con iconos chequea documentación
    //'info','warning','success','error'

    this.notification.create(
      type,
      `${first_name} :`,
      message
    );
  }
  
 

}
