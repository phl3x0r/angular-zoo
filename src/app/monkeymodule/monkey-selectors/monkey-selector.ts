import { EventEmitter, Input, Output } from '@angular/core';

export abstract class MonkeySelector {
  monkeys = monkeys;
  @Input()
  expanded: boolean;
  @Output()
  expandedChange = new EventEmitter<boolean>();
  @Input()
  monkey: Monkey;
  @Output()
  monkeyChange = new EventEmitter<Monkey>();
}

const monkeys: Monkey[] = [
  { name: 'Gorilla', habitat: 'Afrika' },
  { name: 'Howler Monkey', habitat: 'America' },
  { name: 'Orangutang', habitat: 'Asia' }
];

export interface Monkey {
  name: string;
  habitat: string;
}
