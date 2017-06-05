import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component.js';
import { ConfirmComponent } from '../confirm/confirm.component.js';
import { AddComponent } from '../add/add.component.js';

@Component({
	selector: 'base',
	template: `
	
        <div class="header">
			<div class="icon icon-plus btn" id="add_btn"></div>
            <div class="icon icon-search"></div>
            <!--<div class="search-input"><input type="text" class="search-text" id="search_input" placeholder="Type here to search" oninput="document.dispatchEvent(new Event('search'))"></div>-->
            <div class="icon icon-menu btn"></div>
		</div>
        <div class="content" id="contact_view">
           <contact *ngFor="let contact of contacts" [contact]="contact" (onEdit)="editContact($event)" (onDelete)="showConfirm($event)"></contact>

         </div>
        <div class="footer">Total {{contacts.length}} contact(s)</div>
		<div class="light-box" *ngIf="lightbox"></div>
		<confirm (onConfirm)="deleteContact($event)" *ngIf="confirm"></confirm>
		<add></add>
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
	display: block;
}

.header {
	position: absolute;
	width: 100%;
	height: 50px;
	background-color: #529aff;
}

.content {
	position: absolute;
	width: 100%;
	top: 50px;
	bottom: 30px;
	background-color: #f9fcff;
	overflow-y: auto;
	overflow-x: hidden;
}

.footer {
	position: absolute;
	width: 100%;
	height: 30px;
	bottom: 0;
	background-color: #529aff;
	color: white;
	padding-top: 7px;
	box-sizing: border-box;
	padding-left: 10px;
}

.icon-plus {
	background-image: url('ng/dist/img/add.png');
	float: right;
	margin-top: 10px;
	margin-right: 10px;
}

.icon-search {
	background-image: url('ng/dist/img/search.png');
	float: right;
	margin-top: 10px;
	margin-right: 10px;
}

.icon-menu {
	background-image: url('ng/dist/img/menu.png');
	float: left;
	margin-top: 10px;
	margin-left: 10px;
}

.light-box {
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	position: absolute;
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
	deleteContactObj: any;
	lightbox: boolean = true;
	confirm: boolean = false;

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
				"id": 6
			}
		]
	}

	editContact(evt: object) {
		console.log(evt);
	}

	showConfirm(evt: any) {
		this.confirm = true;
		this.lightbox = true;
		this.deleteContactObj = evt;
	}

	deleteContact(evt: string) {
		if (evt == 'ok') {
			this.contacts.forEach((ele: any, ind: number) => {
				if (ele.id == this.deleteContactObj.id) {
					this.contacts.splice(ind, 1);
				}
			});
		}
		this.confirm = false;
		this.lightbox = false;
	}
}