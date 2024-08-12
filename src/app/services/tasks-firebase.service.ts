import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasksFirebaseService {

  tasksCollection=collection(this.firestore,"users/MOutdKAeWUFoUGNHVHVy/tasks");

  constructor(private firestore:Firestore) { }

  obtenerTask(): Observable<any> 
  {
    return collectionData(this.tasksCollection,{
      idField:'id'
    }) as Observable<any>;
  }
}
