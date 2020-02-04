import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';
import { ObjUser } from 'src/app/models/user.model';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-user-put',
  templateUrl: './user-put.component.html',
  styleUrls: ['./user-put.component.scss']
})
export class UserPutComponent implements OnInit,OnDestroy {
  userSubscription:Subscription=null;
  user:ObjUser=null;
  roles:any[]=[{
    value:'USER_NORMAL',
    name:'Normal'
  },
  {
    value:'USER_SPECIALIST',
    name:'Especialista'
  }];
  validateForm: FormGroup;
  constructor(private fb: FormBuilder,private store:Store<AppState>,private _userService:UserService) { }

  
  ngOnInit(): void {
    this.userSubscription=this.store.select('auth').subscribe((auth)=>{
      this.user=auth.user;
      console.log(this.user)


    });
    this.validateForm = this.fb.group({
      first_name: [this.user.first_name, [Validators.required]],
      last_name: [this.user.last_name, [Validators.required]],
      email: [this.user.email, [Validators.required,Validators.email]],
      role: [null, [Validators.required]],
    });
    //this.validateForm.controls['role'].setValue(this.user.role, {onlySelf: true});
    
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.invalid){
      console.log('Formulario inválido')
       return;
    }
    console.log(this.validateForm.value);
    this._userService.putUser({...this.validateForm.value});
  }

}
