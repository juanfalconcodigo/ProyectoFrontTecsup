import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*servicio*/
import { UserService } from 'src/app/services/user.service';
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



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  passwordVisible = false;
  constructor(private fb: FormBuilder,private _userService:UserService) { }

  ngOnInit() {
    jsLogin();

    this.validateForm = this.fb.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.minLength(6)]],
      remember: [true]
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let{invalid,value,value:{email,password}}=this.validateForm;
    if(invalid){
      console.log('Formulario inválido')
      return;
    }
    console.log(value);
    this._userService.postLogin(email,password);
    this.validateForm.reset();

  }

  
}
