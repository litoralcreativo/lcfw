import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { LcAbstractDataSourceTable } from './abstract-data-source-table.model';

export class LcTableSelction<T> extends LcAbstractDataSourceTable<T> {
  selection: SelectionModel<T>;
  initialSelection = [];
  allowMultiSelect = true;

  constructor() {
    super();
    this.selection = new SelectionModel<T>(
      this.allowMultiSelect,
      this.initialSelection
    );
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this._dataSource.data.length;
    return numSelected == numRows;
  }

  toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this._dataSource.data.forEach((row) => this.selection.select(row));
  }
}
