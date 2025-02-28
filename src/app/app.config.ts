import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "portfolio-7192a", appId: "1:722406259605:web:a0ffd7ea816adceacd549c", storageBucket: "portfolio-7192a.firebasestorage.app", apiKey: "AIzaSyCtiySKa9gtROY3VaomELpFXCG8mUz6M0g", authDomain: "portfolio-7192a.firebaseapp.com", messagingSenderId: "722406259605", measurementId: "G-2KHWNQR09R" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())]
};
