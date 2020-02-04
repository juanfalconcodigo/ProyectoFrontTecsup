import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socketStatus:boolean=false;
  constructor(private socket:Socket,private message: NzMessageService) {
    this.chekStatus();
   }

  chekStatus(){
    this.socket.on('connect',()=>{
      this.socketStatus=true;
      console.log('Conectado al servidor');

      this.listen('client-connect').subscribe((payload:any)=>{
        let{info}=payload;
       console.log(payload);
       this.message.create('info',info);
      });
      this.listen('client-disconnect').subscribe((payload:any)=>{
        let{info}=payload;
        console.log(payload);
        this.message.create('warning',info);
       });

    });

    this.socket.on('disconnect',()=>{
      this.socketStatus=false;
      console.log('Desconectado del servidor');
    });

  }

  login(_id:string,first_name:string,photo_url:string,role:string){

    console.log('Configurando usuario',{_id,first_name,photo_url,role});
    this.emit('configurar-usuario',{_id,first_name,photo_url,role},(res)=>{
      console.log(res)
    });

  }

  emit(event:string,payload?:any,callback?:Function){
    return this.socket.emit(event,payload,callback);
  }

  listen(event:string){
    return this.socket.fromEvent(event);
  }
}
