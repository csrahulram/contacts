import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  detailTitle: string = 'Add a new contact';
  constructor(private contactService:ContactService, private router:Router) { }

  ngOnInit() {
  }

  onBack(){
    this.contactService.showDetails = false;
    this.router.navigate(['/contacts']);
  }

}
