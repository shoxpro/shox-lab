import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { UserFormComponent } from './users/user-form.component';
import { AuthService } from "./core/auth.service";
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule, MatButtonModule} from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'user', component: UserFormComponent }
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAnebfFT3zmWV5qeRRgbJpxsL4sTE2cKDU',
  authDomain: 'shox-auth-project.firebaseapp.com',
  databaseURL: 'https://shox-auth-project.firebaseio.com',
  projectId: 'shox-auth-project',
  storageBucket: 'shox-auth-project.appspot.com',
  messagingSenderId: '25014850296'
};

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
