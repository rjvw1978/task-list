import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { getDocs, query, where } from 'firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksFirebaseService {

  usersCollection=collection(this.firestore,"users");
  userLoginOn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  userRole:BehaviorSubject<string>=new BehaviorSubject<string>("invitado");

  constructor(private firestore:Firestore) { }

  async login(email:string, password:string):Promise<any>{
    const user = query(this.usersCollection, where("email", "==", email), where("password", "==", password));
    const userData = await getDocs(user);
    let userDoc;
   userData.forEach(
    (doc) => {
      userDoc = JSON.parse(JSON.stringify(doc.data()))
      localStorage.setItem("userId",JSON.parse(JSON.stringify(doc.id)));
      console.log(JSON.stringify(doc.id)); //guarda el dato dentro ""
      console.log(doc.id, " => ", doc.data());
      //behaviors
      this.userLoginOn.next(true);
      this.userRole.next(userDoc.role);
      }
    );
    return userDoc
  }

  get UserLoginOn():Observable<boolean>
  {
    return this.userLoginOn.asObservable()
  }

  get UserRole():Observable<string>
  {
    return this.userRole.asObservable();
  }

  cerrarSesion(){
    this.userLoginOn.next(false);
    this.userRole.next("invitado");
    localStorage.removeItem("userId");
  }

  obtenerTask(): Observable<any> 
  { const userId =  localStorage.getItem("userId") ? localStorage.getItem("userId") : "";
    const route= `users/${userId}/tasks`
    return collectionData(collection(this.firestore,route),{
      idField:'id'
    }) as Observable<any>;
  }
}
