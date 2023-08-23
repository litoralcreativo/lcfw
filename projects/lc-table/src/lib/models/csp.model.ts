import { Observable } from 'rxjs';
import { TableColumns } from './column.model';
import { TableConfiguration } from './configuration.model';

export abstract class CSPTable<T> {
  abstract dataSource: T[] | Observable<T[]>;
  abstract tableColumns: TableColumns<T>;
}
