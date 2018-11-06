import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonkeySelector, Monkey } from './monkey-selector.interface';

@Component({
  selector: 'app-ape-selector',
  templateUrl: './ape-selector.component.html'
})
export class ApeSelectorComponent implements MonkeySelector {
  apes: Monkey[] = [
    { name: 'Gorilla', habitat: 'Afrika' },
    { name: 'Bonobo', habitat: 'Afrika' },
    { name: 'Orangutang', habitat: 'Asia' }
  ];

  @Input()
  expanded: boolean;
  @Output()
  expandedChange: EventEmitter<boolean>;
  @Input()
  selected: Monkey;
  @Output()
  selectedChange = new EventEmitter<Monkey>();
}
