import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList:any=[
    {id:1, title: 'Task A1', description: 'Task 1 description', status:'Completed'},
    {id:2,title: 'Task A2', description: 'Task 2 description', status:'InProgress'},
   ]
  constructor() { }

  obtenerListaDeTareas()
  {
   return this.taskList;
  }
}
