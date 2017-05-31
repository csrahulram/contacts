import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    'selector':'confirm',
    'template':`
        <div class="modal-header">
                <p class="modal-heading-text noclick">{{heading}}</p>
                <div class="close-btn btn" (click)="close()"></div>
            </div>
            <div class="modal-body">
                <div class="modal-text-container">
                    <p class="modal-info">{{message}}</p>
                </div>
                <div class="button-wrapper">
                    <div class="modal-delete-btn btn" tabindex="0" (click)="okFn()">{{okText}}</div>
                    <div class="modal-cancel-btn btn" tabindex="1" (click)="cancelFn()">{{cancelText}}</div>
                </div>
            </div>
    `,
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

.modal-header {
	width: 100%;
	height: 40px;
	background-color: #529aff;
    padding: 5px 0 5px 0;
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

.modal-delete-btn{
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
    `]
})



export class ConfirmComponent{

    @Output() onConfirm = new EventEmitter<string>();

    heading = 'Warning!';
    message = 'Are you sure you want to remove this contact?';
    okText = 'Delete';
    cancelText = 'Cancel';

    constructor(){

    }

    close(){
        this.onConfirm.emit('cancel');
    }

    okFn(){
        this.onConfirm.emit('ok');
    }

    cancelFn(){
        this.onConfirm.emit('cancel');
    }

}