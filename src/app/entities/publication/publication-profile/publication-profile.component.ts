import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
/*servicio*/
import { PublicationService } from 'src/app/services/publication.service';

/*redux*/
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-publication-profile',
  templateUrl: './publication-profile.component.html',
  styleUrls: ['./publication-profile.component.scss']
})
export class PublicationProfileComponent implements OnInit,OnDestroy {
  storePublicationSubcription:Subscription=null;
  idPublication:string=null;
  objPublication:PublicationI=null;
  constructor(private _publicationService:PublicationService,private store:Store<AppState>) { }

   ngOnInit(){
    this.storePublicationSubcription=this.store.select('ui').subscribe((ui)=>{
     this.idPublication=ui.idPublication;
     this.getPublication(this.idPublication);
    });
  }

  getPublication(_id:string){
    this._publicationService.getPublicationId(_id).subscribe((res:any)=>{
      this.objPublication=res.publication;
      console.log(this.objPublication);
    });
  }

  ngOnDestroy(){
    this.storePublicationSubcription.unsubscribe();
  }

}

interface PublicationI{
  is_active:boolean;
  likes:number;
  _id:string;
  description:string;
  category:any;
  photo_url:string;
  photo_public_id:string;
  user: any;
  date: Date;
  cellphone:string;
}