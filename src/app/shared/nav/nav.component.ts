import { Component } from '@angular/core';
import { TasksFirebaseService } from '../../services/tasks-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  userRole:string = 'invitado';
  userLoginOn: boolean= false;

  constructor(private loginService:TasksFirebaseService, private router:Router)  
  {
     this.loginService.userLoginOn.subscribe({
       next: (loginStatus: boolean) => {
         this.userLoginOn = loginStatus;
       },
       error: (error) => console.error('Error: ', error)
     })

     this.loginService.userRole.subscribe({
       next: (role: string) => {
         this.userRole = role;
       },
       error: (error) => console.error('Error: ', error)
     })

  }

  cerrarSesion()
  {
    this.loginService.cerrarSesion();
    this.router.navigateByUrl('login');
  }

}


