import { Component, OnInit,OnDestroy } from '@angular/core';
import { addDays, distanceInWords } from 'date-fns';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';
/*para @ngrx/redux*/
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ObjUser } from 'src/app/models/user.model';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnDestroy {
  elemento:HTMLElement;
  menssagesSubscription:Subscription=null;
  usuarioSubscription:Subscription=null;
  time = distanceInWords(new Date(), new Date());
  inputValue = '';
  submitting = false;
  user= {
    first_name:'',photo_url:'',role:''
    /* author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' */
  };
  data:any[] = [
    /* {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: distanceInWords(new Date(), addDays(new Date(), 1))
    },
    {
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      datetime: distanceInWords(new Date(), addDays(new Date(), 2))
    } */
  ];
  constructor(private _chatService:ChatService,private store:Store<AppState>) { }

  ngOnInit() {
    //para el store
    this.usuarioSubscription=this.store.select('auth').subscribe((data:any)=>{
      //ojo con esto de redux
     if(data.user){
       console.log(data.user)
      let{user:{first_name,photo_url,role}}=data;
      this.user={first_name,photo_url,role}
     }
      
    });
    //para los mensajes
    this.menssagesSubscription=this._chatService.getMessages().subscribe((payload:any)=>{
      let {mensaje:content,first_name:author,photo_url,role}=payload;
      console.log({content,author,photo_url,role});
      this.data.push({content,author,photo_url,role});
      console.log(this.data);
      this.elemento=document.getElementById('id-chat');
      setTimeout(()=>{
        this.elemento.scrollTop=this.elemento.scrollHeight;
      },500);
      
    });
  }

  ngOnDestroy(): void {
 
    this.menssagesSubscription.unsubscribe();
    this.usuarioSubscription.unsubscribe();
    
  }

  handleSubmit(): void {
    this.submitting = false;
    const content = this.inputValue.trim();
    let{first_name,photo_url,role}=this.user;
    this._chatService.sendMessage(content,first_name,photo_url,role);
    this.inputValue = '';
    /* setTimeout(() => {
      this.submitting = false;
       this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: distanceInWords(new Date(), new Date())
        }
      ].map(e => {
        return {
          ...e,
          displayTime: distanceInWords(new Date(), e.datetime)
        };
      });
    }, 800); */
  }

}
