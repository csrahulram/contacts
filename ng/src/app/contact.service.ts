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

  public contactModel: Contact[] = Contacts;

  private id = 0;

  constructor(private httpClient: HttpClient) { }

  addContact(contact: Contact): void {
    contact.id = this.id++;
    this.contactModel.push(contact);
  }

  delete(contact: Contact) {
    this.contactModel.splice(this.contactModel.indexOf(contact), 1);
  }
}
