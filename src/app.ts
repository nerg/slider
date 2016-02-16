import { Component } from 'angular2/core';
import { Slider } from './slider.ts';

@Component({
  selector: 'app',
  template:  `    
    <slider *ngFor="#ci of ciList, #i=index" [slideValue]="ci" [index]="i"></slider>   
    <button id="printCi" (click)="onClick()">Afficher</button>`, 
  directives: [ Slider ]
})

export class App {
  
  ciList = [ 123,125,155,123,125,155,123,125,155,123,125,155,123,125,155,123,125,155,235,234,123,125,155,123,125,155,123,125,155,123,125,155,123,125,155,123,125,155,235,234,125,155,235,234 ];   
  
  onClick(){
    alert(this.ciList);
  }
};