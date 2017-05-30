import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector:'contact',
    template:`
    <div class="delete-btn btn icon"></div>
			 <div class="edit-btn btn icon"></div>
                <div class="profile-icon male noclick"></div>
                <div class="details noclick">
                    <p class="name">{{contact.name}}</p>
                    <p class="number">{{contact.number}}</p>
                </div>
				<div class="id hide">{{contact.id}}</div>
                `,
    styles: [`
    .delete-btn{
	background-image: url('ng/dist/img/delete.png');
    margin-top: 15px;
    margin-right: 25px;
    position: absolute;
    right: 0;
}

.delete-btn:hover{
	background-color: rgba(0, 0, 0, 0.2);
}

.edit-btn{
	background-image: url('ng/dist/img/edit.png');
    margin-top: 15px;
    margin-right: 65px;
    position: absolute;
    right: 0;
}

.edit-btn:hover{
	background-color: rgba(0, 0, 0, 0.2);
}

.icon {
	width: 30px;
	height: 30px;
	background-size: cover;
}

:host {
	height: 80px;
	border-bottom: 0.2px solid rgba(0, 0, 0, 0.4);
	padding-top: 10px;
	box-sizing: border-box;
	padding-left: 10px;
	border-radius: 3px;
	display: block;
}

.name {
	font-size: 26px;
	line-height: 30px;
}

.number {
	font-size: 15px;
	line-height: 15px;
	color: rgba(0, 0, 0, 0.68);
}

.profile-icon {
	background-image: url('ng/dist/img/profile.png');
	width: 60px;
	height: 60px;
	background-size: cover;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: 50%;
	float: left;
}
    
    `]
})

export class ContactComponent implements OnInit{
	@Input() contact:object;

    ngOnInit(){

    }
}