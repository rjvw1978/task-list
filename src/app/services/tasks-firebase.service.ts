import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { getDocs, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class TasksFirebaseService {
  userId =  localStorage.getItem("userId") ? localStorage.getItem("userId") : "";
  route= `users/${this.userId}/tasks`.replace(/"/g, '')
  
  tasksCollection=collection(this.firestore,this.route);
  usersCollection=collection(this.firestore,"users");

  constructor(private firestore:Firestore) { }

  async login(email:string, password:string):Promise<boolean>{
    const user = query(this.usersCollection, where("email", "==", email), where("password", "==", password));
    const userData = await getDocs(user);
    
   userData.forEach((doc) => {
      localStorage.setItem("userId", JSON.stringify(doc.id));
      console.log(doc.id, " => ", doc.data());
    });
    if (userData.size > 0)
      return true;
    else
      return false;
  }
  obtenerTask(): Observable<any> 
  {
    return collectionData(this.tasksCollection,{
      idField:'id'
    }) as Observable<any>;
  }
}
