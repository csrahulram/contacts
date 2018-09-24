import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private contactService: ContactService, private router:Router) { }

  ngOnInit() {
    
  }

  
  
}
