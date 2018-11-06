import { Component, Input, ComponentRef, OnDestroy } from '@angular/core';
import { MonkeySelector, Monkey } from './monkey-selector';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monkey-dropdown',
  templateUrl: './monkey-dropdown.component.html'
})
export class MonkeyDropdownComponent extends MonkeySelector
  implements OnDestroy {
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
