import {Component, ElementRef, Inject, AfterViewInit, ChangeDetectorRef} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'slider',
    template: 
    `
    <input #sldValue [(ngModel)]="slideValue">
    <div id="slider"></div>
    <h2>slideValue = {{slideValue}}</h2>
    `
})

export class Slider implements AfterViewInit {
    
    elementRef: ElementRef;
    slideValue: number = 0;

    constructor(@Inject(ElementRef) elementRef: ElementRef, public cdr: ChangeDetectorRef) {
      this.elementRef = elementRef;
    }

    ngAfterViewInit() { 
      jQuery(this.elementRef.nativeElement).find("#slider").slider({
        range: false,
        orientation: "vertical",
        min: 0,
        max: 100,
        value: this.slideValue,
        slide: ( event, ui ) => {
          this.slideValue = ui.value;
        }
      });
    }
}