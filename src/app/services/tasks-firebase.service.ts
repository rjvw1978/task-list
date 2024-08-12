import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { getDocs, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class TasksFirebaseService {

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
  { const userId =  localStorage.getItem("userId") ? localStorage.getItem("userId") : "";
    const route= `users/${userId}/tasks`.replace(/"/g, '')
    return collectionData(collection(this.firestore,route),{
      idField:'id'
    }) as Observable<any>;
  }
}
