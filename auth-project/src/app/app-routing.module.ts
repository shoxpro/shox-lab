import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './core/auth.guard';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: UserLoginComponent, }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
