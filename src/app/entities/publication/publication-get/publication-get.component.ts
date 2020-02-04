import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';
import { Subscription } from 'rxjs';
//redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { SetIdPublication } from 'src/app/pages/home/store/iu.actions';
import { async } from 'rxjs/internal/scheduler/async';


@Component({
  selector: 'app-publication-get',
  templateUrl: './publication-get.component.html',
  styleUrls: ['./publication-get.component.scss']
})
export class PublicationGetComponent implements OnInit,OnDestroy{
  loading:boolean=true;
  publications:any[]=[];
  publicationSubscription:Subscription=null;
  constructor(private _publicationService:PublicationService,private router:Router,private store:Store<AppState>) { }

  ngOnInit() {
    this.publicationSubscription=this._publicationService.getPublication().subscribe(async(res:any)=>{
      await setTimeout(() => {
        this.loading=false
        this.publications=res.publications;
        console.log(this.publications);
      }, 500);
    });
  }

  ngOnDestroy(){
    this.publicationSubscription.unsubscribe();
  }

  routerPublicationProfile=async(_id:string)=>{
    await this.store.dispatch(new SetIdPublication(_id));
    await this.router.navigate(["home/publication/profile"]);
  }

}
