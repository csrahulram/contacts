import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component.js'

@Component({
	selector: 'base',
	template: `
        <div class="header"></div>
        <div class="content" id="contact_view">
           <contact *ngFor="let contact of contacts" [contact]="contact"></contact>

         </div>
        <div class="footer">Total <span id="count"></span> contact(s)</div>
		
    `,
	styles: [`
    
    
    :host {
	position: fixed;
	width: 100%;
	height: 100%;
	max-width: 480px;
	transform: translateX(-50%) translateY(-50%);
	left: 50%;
	top: 50%;
	font-family: calibri;
}

.header {
	position: fixed;
	width: 100%;
	height: 50px;
	background-color: #529aff;
}

.content {
	position: fixed;
	width: 100%;
	top: 50px;
	bottom: 30px;
	background-color: #f9fcff;
	overflow-y: auto;
	overflow-x: hidden;
}

.footer {
	position: fixed;
	width: 100%;
	height: 30px;
	bottom: 0;
	background-color: #529aff;
	color: white;
	padding-top: 7px;
	box-sizing: border-box;
	padding-left: 10px;
}

@media only screen and (min-width: 500px) {
	:host {
		height: 80%;
	}
	.header {
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}
	.footer {
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
	}
}

`]

})

export class BaseComponent {
	contacts: Array<object> = new Array();
	constructor() {
		this.contacts = [
			{
				"id": 2,
				"name": "Vinoth",
				"number": "9962293024",
				"gender": "male"
			},
			{
				"id": 3,
				"name": "Naveen",
				"number": "9962293025",
				"gender": "male"
			},
			{
				"id": 4,
				"name": "Vivek",
				"number": "9962293026",
				"gender": "male"
			},
			{
				"name": "Rahul",
				"number": "4234234234",
				"id": 5
			},
			{
				"name": "Vikram",
				"number": "46448765",
				"id": 4
			}
		]
	}
}