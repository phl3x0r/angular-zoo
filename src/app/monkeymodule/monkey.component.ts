import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApeSelectorComponent } from './monkey-selectors/ape-selector.component';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { ComponentType } from '@angular/core/src/render3';
import { MonkeySelector } from './monkey-selectors';

@Component({
  selector: 'monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.scss']
})
export class MonkeyComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  _selectors = [ApeSelectorComponent];
  set selectors(s) {
    this._selectors = s;
  }
  get selectors() {
    return this._selectors;
  }

  ngOnInit() {
    interval(5000)
      .pipe(take(10))
      .subscribe(_ => {
        this.selectors = [...this.selectors, ApeSelectorComponent];
      });
  }
}
