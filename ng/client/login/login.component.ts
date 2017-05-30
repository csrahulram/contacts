import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
    <h1>Login some name</h1>
    <label>Username</label>
    <input #username type="text">
    <br>
    <label>Password</label>
    <input #password type="password">
    <br>
    <button (click)="auth(username.value, password.value)">Login</button>
    `,
    styles: ['h1{color:blue}']

})

export class LoginComponent {

    constructor(
        private router: Router
    ) {

    }

    auth(username: string, password:string) {
        if(username == 'rahul' && password == 'ram'){
            this.router.navigate(['/product']);
        }
    }
}