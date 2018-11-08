import { Component } from '@angular/core';
import { CountSelector } from './count-selector';

@Component({
  selector: 'random-selector',
  templateUrl: './random-selector.component.html'
})
export class RandomComponent extends CountSelector {
  emitRandomCount() {
    this.countChange.emit(Math.ceil(Math.random() * 100));
  }
}
