import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appContarClicks]'
})
export class ContarClicksDirective {
  clickN = 0;
  @HostListener('click', ['$event.target']) onClick(btn){
		console.log('a',btn, "Número de Clicks:", ++this.clickN );
	}
}
