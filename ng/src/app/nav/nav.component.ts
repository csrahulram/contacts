import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  detailTitle: string = 'Add a new contact';
  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }

}
