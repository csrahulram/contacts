import {Component, Output, Input} from '@angular/core';

@Component({
    'selector':'add',
    'template':` <div class="modal-header">
                <p class="modal-heading-text noclick">{{heading}}</p>
                <div class="close-btn btn" (click)="close()"></div>
            </div>
            <div class="modal-body">
                <div class="profile-image male noclick"></div>
                <div class="modal-details">
                    <input type="text" class="modal-text" id="modal_name" maxlength="20" placeholder="Enter name">
                    <input type="text" maxlength=10 class="modal-text" id="modal_number" placeholder="Enter phone number">
                </div>
                <div class="button-wrapper">
                    <div class="modal-ok-btn btn" tabindex="0" (click)="okFn()">{{okText}}</div>
                    <div class="modal-cancel-btn btn" tabindex="1" (click)="cancelFn()">{{cancelText}}</div>
                </div>
            </div>`,
            'styles':[`
    :host {
	width: 80%;
	height: 280px;
	background-color: aquamarine;
	position: absolute;
	transform: translateX(-50%) translateY(-50%);
	top: 50%;
	left: 50%;
}

.profile-image {
	background-image: url(ng/dist/img/profile.png);
    width: 80px;
    height: 80px;
    background-size: cover;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: 50%;
    float: left;
}

.modal-header {
	width: 100%;
	height: 40px;
	background-color: #529aff;
    padding: 5px 0 5px 0;
}

.modal-details {
        padding-left: 100px;
    width: 100%;
    box-sizing: border-box;
}

.modal-body {
	    background-color: white;
    width: 100%;
    height: 240px;
    padding-top: 25px;
    padding-left: 35px;
    box-sizing: border-box;
    overflow: hidden;
    padding-right: 35px;
}

.modal-heading-text {
	    color: white;
    margin-left: 10px;
    float: left;
    line-height: 30px;
    font-size: 18px;
    margin-bottom: 0;
}

.modal-info{
	    font-size: 24px;
	text-align: center;
        margin-bottom: 40px;
}

.modal-ok-btn{
	width: 130px;
    height: 50px;
    background-color: #c12e2a;
    border-radius: 5px;
    color: white;
    font-size: 24px;
    text-align: center;
    float: left;
}

.modal-cancel-btn{
	width: 130px;
    height: 50px;
    background-color: #e0e0e0;
    border-radius: 5px;
    color: black;
    font-size: 24px;
    text-align: center;
    float: right;
}

.modal-text {
	margin-top: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    color: black;
    font-size: 16px;
	line-height: 23px;
	width: 100%;
}

.modal-text::placeholder {
	color: rgba(0, 0, 0, 0.5);
}

.button-wrapper{
    margin-top: 50px;
}

.modal-text:focus {
	outline: none;
}


    `]
})

export class AddComponent{
    heading:string = 'Edit contacts'
    okText:string = 'Update';
    cancelText:string = 'Cancel';
}