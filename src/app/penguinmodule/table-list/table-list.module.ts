import { NgModule } from '@angular/core';
import { TableListComponent } from './table-list.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [CommonModule, MatTableModule, MatSortModule],
  declarations: [TableListComponent],
  exports: [TableListComponent, MatTableModule]
})
export class TableListModule {}
