import {
  Component,
  EventEmitter,
  Input,
  Output,
  ComponentRef,
  OnDestroy
} from '@angular/core';
import { MonkeySelector, Monkey } from './monkey-selector.interface';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monkey-dropdown',
  templateUrl: './monkey-dropdown.component.html'
})
export class MonkeyDropdownComponent implements MonkeySelector, OnDestroy {
  @Input()
  expanded: boolean;
  @Output()
  expandedChange = new EventEmitter<boolean>();
  @Input()
  selected: Monkey;
  @Output()
  selectedChange = new EventEmitter<Monkey>();
  monkeySelectors: ComponentPortal<MonkeySelector>[];
  @Input()
  set selectors(selectors: ComponentType<MonkeySelector>[]) {
    this.monkeySelectors = selectors.map(s => new ComponentPortal(s));
  }

  private subs: Subscription[] = [];

  attachSelector(selector: ComponentRef<MonkeySelector>) {
    this.subs.push(
      selector.instance.selectedChange.subscribe((m: Monkey) => {
        this.selectedChange.emit(m);
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
