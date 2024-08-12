import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TasksFirebaseService } from '../../services/tasks-firebase.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
 taskList:any;
 constructor(private taskService:TaskService, private taskFirebase: TasksFirebaseService)
 {
   /*this.taskList=this.taskService.obtenerListaDeTareas().subscribe({
    next: data => {this.taskList=data["user"]["tasks"];
      console.log(data);
    },
    error: error => console.error('Error: ', error),
    complete: () => console.log('Task List loaded')
   })*/

   this.taskFirebase.obtenerTask().subscribe({
    next: data => {this.taskList=data;
      console.log(data);
    },
    error: error => console.error('Error: ', error),
    complete: () => console.log('Task List loaded')
   })

 }
}
