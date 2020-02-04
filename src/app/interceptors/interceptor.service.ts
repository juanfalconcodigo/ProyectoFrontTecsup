import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token:string=null;
  constructor(private store:Store<AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    console.log("te observo");
    let request=req;
    this.store.select('auth').subscribe((res)=>{
      this.token=res.token;
    });
    if(this.token){
      console.log("aui toy");
      const headers=new HttpHeaders({
        token:this.token
      });
      request=req.clone({
        headers
      });
    }
    return next.handle(request);
  }
  
}
