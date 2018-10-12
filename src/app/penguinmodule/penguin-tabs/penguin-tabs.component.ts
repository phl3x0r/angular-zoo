import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'penguin-tabs',
  template: `<div class="Tabs-wrapper" [style.overflow]="overflow"><ng-content></ng-content></div>`,
  styleUrls: ['./penguin-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PenguinTabsComponent {}
