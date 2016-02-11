import {Component, ElementRef, Inject, OnInit} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'slider',
    template: 
    `
    <input type="text" [(ngModel)]="slideValue" id="amount" required placeholder="Enter a name here">
    <div id="slider"></div>
    <h2>slideValue = {{slideValue}}</h2>
    `
})

export class Slider implements OnInit {
    elementRef: ElementRef;
    slideValue: number;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

    ngOnInit() {        
        jQuery(this.elementRef.nativeElement).find("#slider").slider({
          range: false,
          orientation: "vertical",
          min: 0,
          max: 100,
          value: 60,
          slide: function( event, ui ) {
            this.slideValue = ui.value; //doesn't seem to work
            $( "#amount" ).val( ui.value ); 
          }
        });
        
    }
}