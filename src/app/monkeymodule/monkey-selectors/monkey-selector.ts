import { EventEmitter, Input, Output } from '@angular/core';

export abstract class MonkeySelector {
  @Input()
  expanded: boolean;
  @Output()
  expandedChange = new EventEmitter<boolean>();
  @Input()
  selected: Monkey;
  @Output()
  selectedChange = new EventEmitter<Monkey>();
}

export interface Monkey {
  name: string;
  habitat: string;
}
