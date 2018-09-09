import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private contactService: ContactService) { }

  ngOnInit() { }



  add() {
    const contact: Contact = {
      id: this.contactService.contactModel.length,
      name: 'New contact',
      phone: 'New number'
    };
    this.contactService.addContact(contact);
  }
}
