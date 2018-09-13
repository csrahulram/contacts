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

  private contactsUrl = 'api/contacts';

  private contactModel: Contact[] = Contacts;

  private id = 0;

  public showDetails: boolean = false;
  public edit: boolean = false;
  public currentContact: any = {
    name: '',
    phone: '',
    gender: '',
    profile: ''
  }

  public alertMsg:string;
  public alert:boolean = false;
  private alertCallback;

  public confirmMsg:string;
  public confirm:boolean = false;
  private confirmCallback;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('/api/read').subscribe((data: any) => {this.contactModel = data; console.log(data)});
  }

  getContacts(): Contact[]{
    return this.contactModel;
  }

  addContact(contact: Contact): void {
    contact.id = this.id++;
    this.contactModel.push(contact);
  }

  updateContact(contact:Contact):void {
    this.contactModel.forEach(item => {
      if(contact.id == item.id){
        item = contact;
      }
    })
  }

  deleteContact(contact: Contact):void {
    this.contactModel.splice(this.contactModel.indexOf(contact), 1);
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
}
