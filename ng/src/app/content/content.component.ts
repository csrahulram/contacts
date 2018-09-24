import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { RouterOutlet } from '@angular/router';
import { SlideAnimation } from '../animation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    SlideAnimation
  ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }

}
