import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';


function jsLogin(){
  const inputs = document.querySelectorAll(".input");
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

}

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  passwordVisible = false;
  //para la foto
  photoSelected: string | ArrayBuffer;
  file: File;
  constructor(private fb: FormBuilder,private _userService:UserService,private router:Router,private message: NzMessageService ) { }
 //const{first_name,last_name,email,password,role}=req.body;
  ngOnInit() {
    jsLogin();

    this.validateForm = this.fb.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.minLength(6)]],
      role: [null, [Validators.required]],
    });
  }

  /* submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let{invalid,value}=this.validateForm;
    if(invalid){
      console.log('Formulario inválido')
      return;
    }

    console.log(value);
  } */
  submitForm=async(): Promise<any>=> {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      //console.log(this.validateForm);
    }
    if(this.validateForm.invalid){
      console.log('Formulario inválido')
       return;
    }
    console.log(this.validateForm.value);
    const{first_name,last_name,email,password,role}=this.validateForm.value;
    await this._userService
      .postUsuario(first_name,last_name,email,password,role, this.file)
      .subscribe(
        async(res) => {
          console.log(res);
          await this.createMessage('success','Registro exitoso!');
          await this.validateForm.reset();
          this.photoSelected=await null;
        },
        err => {
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
