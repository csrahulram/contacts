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

  add(){
    this.contactService.showDetails ? this.contactService.showDetails = false : this.contactService.showDetails = true; 
    this.contactService.edit = false;
    this.contactService.currentContact = {
      id: null,
      name: '',
      phone: '',
      gender: '',
      profile:'dummy.png'
    }
  }
  
}
