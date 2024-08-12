import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkSZDF7XiYXjBNILH-_UZd29v9a_aOJrU",
  authDomain: "task-app-bd86a.firebaseapp.com",
  projectId: "task-app-bd86a",
  storageBucket: "task-app-bd86a.appspot.com",
  messagingSenderId: "594794468205",
  appId: "1:594794468205:web:d4981c12dbd0c4ff954064"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideFirestore(()=>getFirestore()),
  ]
};
