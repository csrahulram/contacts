import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';

import { Contact } from '../contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  count: number;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }
}
