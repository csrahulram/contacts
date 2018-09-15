import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Contact } from './contact';

import { Contacts } from './mock-contacts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private contactModel: Contact[] = Contacts;

  private id = 0;
  public base: string = 'http://localhost:8080/';
  public showDetails: boolean = false;
  public edit: boolean = false;
  public currentContact: any = {
    id : null,
    name: '',
    phone: '',
    gender: '',
    profile: 'dummy.png'
  }

  public alertMsg:string;
  public alert:boolean = false;
  private alertCallback;

  public confirmMsg:string;
  public confirm:boolean = false;
  private confirmCallback;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/api/read').subscribe((data: any) => {this.contactModel = data});
  }

  addContact(cb:Function = null): void {
    this.httpClient.post('/api/add', this.currentContact).subscribe((data: any) => {this.contactModel = data; cb?cb():null});
  }

  updateContact(cb:Function = null):void {
    this.httpClient.put('/api/update', this.currentContact).subscribe((data: any) => {this.contactModel = data; cb?cb():null});
  }

  deleteContact(cb:Function = null):void {
    this.httpClient.delete('/api/delete/' + this.currentContact.id, this.currentContact).subscribe((data: any) => {this.contactModel = data; cb?cb():null});
  }

  uploadProfile(formData: FormData, cb:Function = null){
    this.httpClient.post(this.base + 'api/upload', formData).subscribe(
      event=>{
        console.log(event)
        cb ? cb(event):null;
      }, 
      error=>{
          console.log(error)
      });
  }

  showAlert(msg:string, cb:Function = null):void{
    this.alert = true;
    this.alertMsg = msg;
    this.alertCallback = cb || null;
  }

  hideAlert(){
    this.alert = false;
    this.alertMsg = '';
    this.alertCallback ? this.alertCallback():null;
  }

  showConfirm(msg:string, cb:Function = null):void{
    this.confirm = true;
    this.confirmMsg = msg;
    this.confirmCallback = cb || null;
  }

  hideConfirm(data){
    this.confirm = false;
    this.confirmMsg = '';
    this.confirmCallback ? this.confirmCallback(data):null;
  }
}
