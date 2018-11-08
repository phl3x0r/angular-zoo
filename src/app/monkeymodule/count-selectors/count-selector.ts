import { EventEmitter, Input, Output } from '@angular/core';

export abstract class CountSelector {
  @Input()
  count = 1;
  @Output()
  countChange = new EventEmitter<number>();
}
