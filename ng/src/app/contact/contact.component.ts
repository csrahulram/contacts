import { Component, OnInit, Input } from '@angular/core';
import { Contact} from './../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: {'(click)':'deleteContact()', 'class':'button' }
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  
  constructor(private contactService: ContactService) { }

  ngOnInit() { }
}
