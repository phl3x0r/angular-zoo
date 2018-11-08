import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MonkeyComponent } from './monkey.component';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';
import { MonkeySelectorModule } from './monkey-selectors';
import { MatCardModule } from '@angular/material/card';
import { CountSelectorModule } from './count-selectors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatCardModule,
    MonkeySelectorModule,
    CountSelectorModule
  ],
  exports: [],
  declarations: [MonkeyComponent]
})
export class MonkeyModule {}
