import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _webSocketService:WebSocketService) { 

  }
  sendMessage(mensaje:string,first_name:string,photo_url:string,role:string){
    let payload={
      mensaje,
      first_name,
      photo_url,
      role,
    }
    this._webSocketService.emit('enviar-mensaje',payload);

  }
  getMessages(){
    return this._webSocketService.listen('mensaje-nuevo');
  }

  getMessagePrivate(){
    return this._webSocketService.listen('mensaje-privado');
  }

  getMessagePublic(){
    return this._webSocketService.listen('mensaje-publico');
  }

  getUsersActive(){
    return this._webSocketService.listen('usuarios-activos');
  }

  emitUsersActive(){
    return this._webSocketService.emit('obtener-usuarios');
  }

}
