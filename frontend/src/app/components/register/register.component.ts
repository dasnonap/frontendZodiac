import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { UsersServiceService } from 'src/app/services/users/users-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  private subscription: Subscription;
  constructor(
      private formBuilder: FormBuilder, 
      private accountService: UsersServiceService,
      private router: Router,
      private authService: AuthServiceService
  ) {

    this.subscription = new Subscription;
  }

  ngOnInit(): void {
    if (localStorage.getItem["JWT_TOKEN"] != null && this.authService.isLoggedIn()){
      this.router.navigate(['/']);
    }

    this.regForm = this.generateForm();
  }

  public onSubmit(){
    if (this.regForm.valid){
      const credentials = this.regForm.value;
        
      this.subscription.add(this.accountService.register(credentials).subscribe((response: any) => {
        if (response != "no")this.authService.authOnLogin(credentials.username, response);
          this.router.navigate(['/']);
        },
        (errorReponse: HttpErrorResponse) => {
        console.log(errorReponse.message);
      })) 
    } 
  }
  
  private generateForm(): FormGroup{
    let username = this.formBuilder.control(null,[
      Validators.required
      
    ]);

    let fname = this.formBuilder.control(null,[
      Validators.required
      
    ]);

    let lname = this.formBuilder.control(null,[
      Validators.required
      
    ]);

    let password1 = this.formBuilder.control(null,[
      Validators.required      
    ]);

    let password2 = this.formBuilder.control(null,[
      Validators.required
    ]);

    let email = this.formBuilder.control(null,[
      Validators.required
    ]);

    let iban = this.formBuilder.control(null,[
      Validators.required,
    ]);

    return this.formBuilder.group({
      username,
      fname,
      lname,
      password1,
      password2,
      email,
      iban,
    });
  }
}
