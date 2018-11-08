import { Component, OnInit } from '@angular/core';
import {
  MonkeySelector,
  SpeciesSelectorComponent,
  Monkey
} from './monkey-selectors';
import { HabitatSelectorComponent } from './monkey-selectors';

@Component({
  selector: 'monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.scss']
})
export class MonkeyComponent implements OnInit {
  count = 0;
  monkeySelectors: (typeof MonkeySelector)[] = [
    SpeciesSelectorComponent,
    HabitatSelectorComponent
  ];
  ngOnInit() {}
}
