import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidate]',
  host: {'(input)':'onInput($event)'}
})
export class ValidateDirective implements OnInit {

  @Input() appValidate: any;

  constructor(private el:ElementRef) { }

   ngOnInit(){
    this.el.nativeElement.maxLength = this.appValidate.len;
   }

   onInput($event){
    let el = $event.target;
    el.value = el.value.replace(RegExp(this.appValidate.res, 'g'), '');
   }
}
