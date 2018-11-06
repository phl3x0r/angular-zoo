import { Component } from '@angular/core';
import { MonkeySelector, Monkey } from './monkey-selector';

@Component({
  selector: 'app-ape-selector',
  templateUrl: './ape-selector.component.html'
})
export class ApeSelectorComponent extends MonkeySelector {
  apes: Monkey[] = [
    { name: 'Gorilla', habitat: 'Afrika' },
    { name: 'Bonobo', habitat: 'Afrika' },
    { name: 'Orangutang', habitat: 'Asia' }
  ];
}
