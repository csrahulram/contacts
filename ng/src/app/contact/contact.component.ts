import { Component, OnInit, Input } from '@angular/core';
import { Contact} from './../contact';
import { ContactService } from '../contact.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: {'(click)':'contactDetails()', 'class':'button' }
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  
  constructor(private contactService: ContactService, private router:Router) { }

  ngOnInit() { }

  contactDetails(){
    this.router.navigate(['details/' + this.contact.id])
    this.contactService.currentContact = this.contact;
    this.contactService.edit = true;
    this.contactService.showDetails = true;
  }
}
