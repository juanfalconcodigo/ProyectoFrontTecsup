import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.scss']
})
export class UserPasswordComponent implements OnInit {
  current = 0;
  validateForm: FormGroup;
  index = 'First-content';
  passwordVisible:boolean = false;
  constructor( private fb: FormBuilder,private _userService:UserService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required,Validators.minLength(6)]],
      confirm: [null, [this.confirmValidator,Validators.minLength(6)]],
    });
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    if(this.index==='Second-content'){
      for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
     }
     const {valid,value:{confirm}}=this.validateForm;
     (valid)?this._userService.putUserPassword({password:confirm}):console.log("Datos inválidos");
      return;
    }
    this.current += 1;
    this.changeContent();
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
     
      default: {
        this.index = 'error';
      }
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };


}
