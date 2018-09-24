import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private contactService:ContactService, private router:Router) { }

  ngOnInit() {
  }

  doSearch($event){
    if($event.srcElement.value != ''){
      this.contactService.searchContact($event.srcElement.value);
    } else {
      this.contactService.getAllContacts();
    }
    
  }

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
    this.router.navigate(['new']);

  }

}
