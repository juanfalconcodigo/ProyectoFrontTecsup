import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http:HttpClient) { }
  getPublication(){
    return this.http.get(`${environment.urlBase}/publication/list`);
  }
  getPublicationId(_id:string){
    return this.http.get(`${environment.urlBase}/publication/list/${_id}`);
  }
  //cargaremos las category para hacer el post de publication
  getCategory(){
    return this.http.get(`${environment.urlBase}/category/list`);
  }
  postPublication(data,image: File){
    //solo acepta string el FormData
    const{description,category,cellphone}=data;
    const fd = new FormData();
    fd.append('description', description);
    fd.append('category', category);
    fd.append('cellphone', cellphone);
    fd.append('image', image);
    return this.http.post(`${environment.urlBase}/publication/create`,fd);
  }
  
}
