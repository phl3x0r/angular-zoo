import { Component, Input, ComponentRef, OnDestroy } from '@angular/core';
import { MonkeySelector, Monkey } from './monkey-selector';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'monkey-dropdown',
  templateUrl: './monkey-dropdown.component.html'
})
export class MonkeyDropdownComponent extends MonkeySelector
  implements OnDestroy {
  monkeySelectors: ComponentPortal<MonkeySelector>[];
  componentRefs: ComponentRef<MonkeySelector>[] = [];
  @Input()
  set selectors(selectors: ComponentType<MonkeySelector>[]) {
    this.monkeySelectors = selectors.map(s => new ComponentPortal(s));
  }

  private subs: Subscription[] = [];

  attachSelector(componentRef: ComponentRef<MonkeySelector>) {
    this.componentRefs.push(componentRef);
    this.subs.push(
      componentRef.instance.monkeyChange.subscribe((m: Monkey) => {
        this.componentRefs.forEach(cref => (cref.instance.monkey = m));
        this.monkeyChange.emit(m);
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
