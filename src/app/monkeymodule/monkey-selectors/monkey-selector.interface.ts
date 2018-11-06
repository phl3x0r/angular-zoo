import { EventEmitter } from '@angular/core';

export abstract class MonkeySelector {
  selected: Monkey;
  selectedChange: EventEmitter<Monkey>;
  expanded: boolean;
  expandedChange: EventEmitter<boolean>;
}

export interface Monkey {
  name: string;
  habitat: string;
}
