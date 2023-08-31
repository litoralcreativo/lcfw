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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this._dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this._dataSource.data.forEach((row) => this.selection.select(row));
  }
}
