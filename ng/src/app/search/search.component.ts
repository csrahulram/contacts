import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }

  doSearch($event){
    if($event.srcElement.value != ''){
      this.contactService.searchContact($event.srcElement.value);
    } else {
      this.contactService.getAllContacts();
    }
    
  }

}
