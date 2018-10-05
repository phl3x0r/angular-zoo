// bootstrap
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PenguinComponent } from './penguin.component';
import { TableListModule } from './table-list/table-list.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PenguinComponent
      }
    ]),
    CommonModule,
    TableListModule
  ],
  exports: [],
  declarations: [PenguinComponent]
})
export class PenguinModule {}
