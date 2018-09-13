import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  @ViewChild('contact_name') contactName: ElementRef;
  @ViewChild('contact_phone') contactPhone: ElementRef;
  @ViewChild('contact_gender') contactGender: ElementRef;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }

  checkData(){
    console.log(this.contactService.currentContact);
  }

  create(){
    if(this.contactService.currentContact.name == ''){
      this.contactService.showAlert('Contact name is required', ()=>{
        this.contactName.nativeElement.classList.add('shake');
        setTimeout(()=>{
          this.contactName.nativeElement.classList.remove('shake');
        }, 820);
      });
      return false;
    }

    if(this.contactService.currentContact.phone == ''){
      this.contactService.showAlert('Contact phone is required', ()=>{
        this.contactPhone.nativeElement.classList.add('shake');
        setTimeout(()=>{
          this.contactPhone.nativeElement.classList.remove('shake');
        }, 820);
      });
      return false;
    }

    if(this.contactService.currentContact.gender == ''){
      this.contactService.showAlert('Gender is required', ()=>{
        this.contactGender.nativeElement.classList.add('shake');
        setTimeout(()=>{
          this.contactGender.nativeElement.classList.remove('shake');
        }, 820);
      });
      return false;
    }

    
  }

}
