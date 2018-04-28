import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  private highlightColor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement는 node객체를 가지고 온다.
    //el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}
