import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service/auth-service.service';
import { UsersServiceService } from '../../services/users/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private subscription: Subscription;
  
  constructor(private formBuilder: FormBuilder, 
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
    this.loginForm = this.generateForm();
  }

  private generateForm(): FormGroup{
    let username = this.formBuilder.control(null,[
      Validators.required
      
    ]);
    let password = this.formBuilder.control(null,[
      Validators.required
    ]);

    return this.formBuilder.group({
      username,
      password
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid){
      const credentials = this.loginForm.value;
      console.log(credentials.username);
      
      this.subscription.add(this.accountService.login(credentials).subscribe((response: any) => {
        if (response != "no")this.authService.authOnLogin(credentials.username, response);
          this.router.navigate(['/']);
        },
        (errorReponse: HttpErrorResponse) => {
        console.log(errorReponse.message);
      })) 
    } 
  }
  
}
