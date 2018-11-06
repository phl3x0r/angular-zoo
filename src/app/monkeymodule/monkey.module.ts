import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MonkeyComponent } from './monkey.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ApeSelectorComponent } from './monkey-selectors/ape-selector.component';
import { MonkeyDropdownComponent } from './monkey-selectors/monkey-dropdown.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MonkeyComponent
      }
    ]),
    CommonModule,
    PortalModule,
    MatTabsModule
  ],
  exports: [],
  declarations: [
    MonkeyComponent,
    ApeSelectorComponent,
    MonkeyDropdownComponent
  ],
  entryComponents: [ApeSelectorComponent]
})
export class MonkeyModule {}
