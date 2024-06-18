import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UtilityService } from 'src/app/utilityService/utility.service';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  message = '';
  constructor(
    private fb: FormBuilder,
   private  service: AuthService,
   private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  login() {

   const userLogin : Login = {
     email: this.Email.value,
     password: this.PWD.value,
   };
    this.service
      .login(userLogin)
      .subscribe(
        (res: any) => {
          if(res.toString() == "inVaild")
          {
            console.log("Check Your Data");
            
          }          
         this.utilityService.saveToken(res.toString())
      });
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
}
