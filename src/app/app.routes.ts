import { PathLocationStrategy } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

export const routes: Routes = [
   {path:'login', component:LoginComponent},
   {path:'tasks', component:TaskListComponent},
   {path:'', redirectTo: 'login', pathMatch:'full'},        
   


];
