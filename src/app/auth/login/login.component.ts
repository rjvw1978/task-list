import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TasksFirebaseService } from '../../services/tasks-firebase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private firestore:Firestore, private taskFirestoreService: TasksFirebaseService) {
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

  get usernameErrors() {
    const errors = this.username.errors;
    return errors ? (errors['required'] ? 'Username is required.' : errors['email'] ? 'Please enter a valid email address.' : null) : null;
  }

  get passwordErrors() {
    const errors = this.password?.errors;
    return errors ? (errors['required'] ? 'Password is required.' : null) : null;
  }

  login() {
    
    if (this.loginForm.valid)
    { 
      this.taskFirestoreService.login(this.username.value, this.password.value).then(
        (userData) =>
          { 
            if (userData!= undefined && userData != null)
            {
              if (userData.role=="user")
              {
                this.router.navigateByUrl('tasks');
              }
              else if (userData.role=="admin")
                {
                alert ("Usuario ADMIN")
              }
            }
            else {
             // this.router.navigateByUrl('login');
              this.loginForm.markAllAsTouched();
            }
          })
      
    }
    else
    {
      this.loginForm.markAllAsTouched();
    }
  }
}
