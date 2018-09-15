import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  count: number;
  fullscreen:boolean = false;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  toggleFullscreen(){
    if(this.fullscreen){
      this.fullscreen = false;
      this.contactService.openFullscreen()
    } else {
      this.fullscreen = true;
      this.contactService.closeFullscreen()
    }
  }
}
