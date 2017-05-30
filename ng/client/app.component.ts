import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <p>angular</p>
    <router-outlet></router-outlet>`
})

export class AppComponent {
    name = 'angular';
}