import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/user-credentials.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  authError: string | null = null;
  loginForm: FormGroup;
  passwordControl: FormControl
 

  constructor(private authService: AuthService, private router: Router)
  {
    this.passwordControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    if(authService.isLoggedIn)
    {
      router.navigate(['/recipes']);
    }
  }


  ngOnInit(): void 
  {
  }

  logIn() 
  {
    if (this.authService.logIn(new UserCredentials(this.loginForm.value))) {
      this.router.navigate(['/recipes']);
    } else {
      this.authError = "Invalid credentials!";
    }
  }

}
