import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
//ngrx store
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { SetUserTokenAction,DelUserTokenAction,PutUserAction } from '../pages/login/store/auth.actions';
import { ActivarLoadingAction,DesactivarLoadingAction } from '../pages/home/store/iu.actions';
import { WebSocketService } from './web-socket.service';
import { Subscription } from 'rxjs';
//para los mensajes
import { NzMessageService } from 'ng-zorro-antd/message';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuario:User=null;
  private authSubs:Subscription;
  private authtenticate:boolean;

  constructor(private http:HttpClient,private router:Router,private store:Store<AppState>,private _webSocketService:WebSocketService,private message: NzMessageService) { }

  postLogin(email:string,password:string){
    return this.http.post(`${environment.urlBase}/user/login`,{email,password}).subscribe((res:any)=>{
      //console.log(res);
      let{usuario,token}=res;
      this._webSocketService.login(usuario._id,usuario.first_name,usuario.photo_url,usuario.role);
      const newUser= new User(usuario);   
      this.store.dispatch(new SetUserTokenAction(newUser,token));
      this.usuario=newUser;
      console.log(this.usuario);
      this.router.navigate(['/home']);
  
    },(err)=>{
      this.createMessage('error',err.error.err.message);
      console.log(err.error);
    });
  }

  postUsuario(first_name: string,last_name:string, email: string, password: string, role: string, image: File){
    //solo acepta string el FormData
    const fd = new FormData();
    fd.append('first_name', first_name);
    fd.append('last_name', last_name);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('role', role);
    fd.append('image', image);
    return this.http.post(`${environment.urlBase}/user/create`, fd);
  }

  putUser(data){
    const{is_active,_id,photo_url,photo_public_id,date}=this.usuario;

    return this.http.put(`${environment.urlBase}/user/put/${_id}`,data).subscribe(async(res)=>{
      const newUser= new User({...data,is_active,_id,photo_url,photo_public_id,date});
      await this.store.dispatch(new PutUserAction(newUser));
      this.usuario=newUser;
      const{_id:new__id,first_name:new_first_name,photo_url:new_photo_url,role:new_role}=this.usuario;
      const payload={
        _id:new__id,
        first_name:new_first_name,
        photo_url:new_photo_url,
        role:new_role
      }
      console.log(this.usuario);
      console.log(res);
      await this._webSocketService.emit('configurar-usuario',payload,(resp)=>console.log(resp));
      await this.createMessage('success','Actualización exitosa!');
    },async(err)=>{
      console.log(err.error);
    });
  }

  putUserPassword(data){
    console.log(data);
    const{_id}=this.usuario;
    return this.http.put(`${environment.urlBase}/user/put/password/${_id}`,data).subscribe(async(res)=>{
     await console.log(res);
     await this.logout();
     await console.log(this.usuario);
    },
    (err)=>console.log(err.error));
  }

  getUsuario(){
    console.log('servicio',this.usuario);
   /*  return {... this.usuario}; */
    return this.usuario;
  }

  logout(){
    this.router.navigate(['/login']);
    //this.afAuth.auth.signOut();
    this.store.dispatch(new DelUserTokenAction());
    this.usuario=null;
    //...
    const payload={
      _id:'sin-id-mongo',
      first_name:'sin-nombre',
      photo_url:'sin-photo',
      role:'sin-rol'
    }
    this._webSocketService.emit('configurar-usuario',payload,()=>console.log('Cerro sesión en socket'));
  }

  createMessage(type: string,mensaje:string): void {
    this.message.create(type,mensaje);
  }



}
