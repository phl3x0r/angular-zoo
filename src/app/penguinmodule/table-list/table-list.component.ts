import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'penguin-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent {
  constructor() {}

  private _displayedColumns: DisplayedColumns;
  columnList: string[];

  @Input()
  translator: TemplateRef<any>;

  @Input()
  set displayedColumns(columns: DisplayedColumns) {
    this._displayedColumns = columns;
    this.columnList = columns && columns.map(c => c.name);
  }

  get displayedColumns() {
    return this._displayedColumns;
  }

  dataSource = new MatTableDataSource<{ [id: string]: string }>();

  @Input()
  title: string;
  _data: { [id: string]: string }[];

  @Input()
  set data(data) {
    this.dataSource.data =
      data &&
      data.map(line => {
        return this.displayedColumns.reduce(
          (acc, col) => {
            const name = col.name;
            return { ...acc, ...{ [name]: line[col.name] } };
          },
          <{ [id: string]: string }>{}
        );
      });
  }

  get data() {
    return this._data;
  }

  @Input()
  set filter(filter: string) {
    this.dataSource.filter = filter ? filter.trim().toLowerCase() : '';
  }

  // workaround for sort binding: https://stackoverflow.com/a/51084166
  sort: MatSort;
  @ViewChild(MatSort)
  set content(content: MatSort) {
    this.sort = content;
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
}

export type DisplayedColumns = Array<{
  name: string;
}>;
