import { Component } from '@angular/core';
import { MonkeySelector, Monkey } from './monkey-selector';

@Component({
  selector: 'habitat-selector',
  templateUrl: './habitat-selector.component.html',
  styles: [
    '.selected {background-color: darkolivegreen !important; color: white } h4 { color: darkolivegreen; }'
  ]
})
export class HabitatSelectorComponent extends MonkeySelector {}
