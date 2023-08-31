import { MatTableDataSource } from '@angular/material/table';

export abstract class LcAbstractDataSourceTable<T> {
  _dataSource: MatTableDataSource<T>;
}
