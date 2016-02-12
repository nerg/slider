import {Component, ElementRef, Inject, AfterViewInit} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'slider',
    template: 
    `
    <input [(ngModel)]="slideValue" (keyup)="updSlider()">
    <div id="slider"></div>
    <h2>slideValue = {{slideValue}}</h2>
    `
})

export class Slider implements AfterViewInit {
    
    elementRef: ElementRef;
    slideValue: number;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
      this.elementRef = elementRef;
    }

    updSlider() {
      jQuery(this.elementRef.nativeElement).find("#slider")
      .slider("option", "value", this.slideValue);
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