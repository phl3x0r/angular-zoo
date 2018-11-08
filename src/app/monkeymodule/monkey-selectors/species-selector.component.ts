import { Component } from '@angular/core';
import { MonkeySelector, Monkey } from './monkey-selector';

@Component({
  selector: 'species-selector',
  templateUrl: './species-selector.component.html',
  styles: [
    '.selected {background-color: cadetblue !important; color: white } h4 { color: cadetblue; }'
  ]
})
export class SpeciesSelectorComponent extends MonkeySelector {}
