import { Component, OnInit, Input } from '@angular/core';
import { Contact} from './../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: {'(click)':'editContact()', 'class':'button' }
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  
  constructor(private contactService: ContactService) { }

  ngOnInit() { }

  editContact(){
    this.contactService.currentContact = this.contact;
    this.contactService.edit = true;
    this.contactService.showDetails = true;
  }
}
