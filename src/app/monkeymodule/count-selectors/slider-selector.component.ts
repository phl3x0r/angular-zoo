import { Component } from '@angular/core';
import { CountSelector } from './count-selector';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'slider-selector',
  templateUrl: './slider-selector.component.html'
})
export class SliderComponent extends CountSelector {}
