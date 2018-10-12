// bootstrap
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PenguinComponent } from './penguin.component';
import { TableListModule } from './table-list/table-list.module';
import { MatTabsModule } from '@angular/material/tabs';
import { PenguinTabsComponent } from './penguin-tabs/penguin-tabs.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PenguinComponent
      }
    ]),
    CommonModule,
    TableListModule,
    MatTabsModule
  ],
  exports: [],
  declarations: [PenguinComponent, PenguinTabsComponent]
})
export class PenguinModule {}
