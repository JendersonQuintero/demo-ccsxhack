import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ************* FIREBASE ******************
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { environment } from '../environments/environment';

// ************* FORMULARIO ******************
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
