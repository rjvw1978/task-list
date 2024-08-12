import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList:any;
  constructor(private http:HttpClient) { }

  obtenerListaDeTareas():Observable<any>
  {
   return this.http.get("data/tasks.json");
  }
}
