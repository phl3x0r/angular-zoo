import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomComponent } from './random-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from './slider-selector.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material/core';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatSliderModule],
  exports: [RandomComponent, SliderComponent],
  declarations: [RandomComponent, SliderComponent]
  // providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }]
})
export class CountSelectorModule {}
