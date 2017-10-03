import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

// ...
@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
  })

export class UserLoginComponent implements OnInit {

constructor(public auth: AuthService,
            private router: Router) { }

    email: string;
    password: string;

    ngOnInit() {
    }

      signInWithGoogle(): void {
        this.auth.googleLogin()
          .then(() => this.afterSignIn());
      }

      signInWithEmail(): void {
          this.auth.emailLogin(this.email, this.password)
          .then(() => this.afterSignIn());
      }

      private afterSignIn(): void {
        // Do after login stuff here, such router redirects, toast messages, etc.
         this.router.navigate(['/profile']);
    }
}
