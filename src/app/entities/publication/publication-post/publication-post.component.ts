import { Component, OnInit, OnDestroy } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-publication-post',
  templateUrl: './publication-post.component.html',
  styleUrls: ['./publication-post.component.scss']
})
export class PublicationPostComponent implements OnInit,OnDestroy {
  categorySubscription:Subscription=null;
  validateForm: FormGroup;
  categories:any[]=[];
  photoSelected: string | ArrayBuffer;
  file: File;
  prueba:string="crear publicación";
  constructor(private _publicationService:PublicationService,private fb: FormBuilder,private message: NzMessageService) { }

  ngOnInit() {
    this.getCategories();
    this.validateForm = this.fb.group({
      description: [null, [Validators.required,Validators.minLength(30)]],
      category: [null, [Validators.required]],
      cellphone: [null, [Validators.required,Validators.minLength(7),Validators.pattern('[0-9]+')]]
    });
  }

  ngOnDestroy(){
    this.categorySubscription.unsubscribe();
  }

  getCategories(){
    this.categorySubscription=this._publicationService.getCategory().subscribe((res:any)=>{
      this.categories=res.categories
      console.log(this.categories)
    },(err)=>{
      console.log(err)
    });
  }

  
  submitForm=async(): Promise<any>=> {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.invalid){
       console.log('Formulario inválido')
       return;
    }
    console.log(this.validateForm.value);
    const{description,category,cellphone}=this.validateForm.value;
    await this._publicationService
      .postPublication({description,category,cellphone}, this.file)
      .subscribe(
        async(res) => {
          console.log(res);
          await this.createMessage('success','Se registro su publicación!');
          await this.validateForm.reset();
          this.photoSelected=await null;
        },
        (err) => {
          console.log(err.error);
          this.createMessage('error',err.error.err.message);
        }
      );
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  createMessage(type: string,mensaje:string): void {
    this.message.create(type,mensaje);
  }

}

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

