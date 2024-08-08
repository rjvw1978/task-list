import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  get isFormValid() {
    return this.loginForm.valid;
  }

  get usernameErrors() {
    const errors = this.username.errors;
    return errors ? (errors['required'] ? 'Username is required.' : errors['email'] ? 'Please enter a valid email address.' : null) : null;
  }

  get passwordErrors() {
    const errors = this.password?.errors;
    return errors ? (errors['required'] ? 'Password is required.' : null) : null;
  }

  login(event:Event) {
    console.log('Not logged in');
    //event.preventDefault();
    this.router.navigateByUrl('tasks');

    if (this.isFormValid)
    {
     
      this.router.navigateByUrl('tasks');

    }
  }
}
