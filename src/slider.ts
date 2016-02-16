import {Component, ElementRef, Inject, AfterViewInit, Input} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'slider',
    template: `
      <span class="sliderElement">
        <div class="sliderInput">
          <input [(ngModel)]="slideValue" (keyup)="updSlider()" size="1" class="inputSlider" [ngStyle]="{'visibility': visibility}">
        </div>
        <div id="slider" class="slider"></div>
        <h4>{{index}}</h4>
      <span>`
})

export class Slider implements AfterViewInit {
        
    @Input() slideValue: number;    
    elementRef: ElementRef;
    visibility = 'hidden';
    @Input() index: number;
    
    constructor(@Inject(ElementRef) elementRef: ElementRef) {
      this.elementRef = elementRef;
    }

    updSlider() {
      jQuery(this.elementRef.nativeElement).find("#slider")
      .slider("option", "value", this.slideValue);      
    }

    ngAfterViewInit() { 
      jQuery(this.elementRef.nativeElement).find("#slider").slider({
        range: "min",
        orientation: "vertical",
        min: 0,
        max: 300,
        animate: true,
        step: 1,
        value: this.slideValue,
        slide: ( event, ui ) => {
          this.slideValue = ui.value;
          this.visibility = "visible";
          jQuery(this.elementRef.nativeElement).find(".ui-slider-range").css({"background": "#FFFFcc"});
        }
      });
    }
}