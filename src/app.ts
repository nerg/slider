import { Component } from 'angular2/core';
import { Slider } from './slider.ts';

@Component({
  selector: 'app',
  template:  `<slider></slider>`, 
  directives: [ Slider ]
})

export class App {};