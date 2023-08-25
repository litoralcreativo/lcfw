import { Observable } from 'rxjs';
import { TableColumns } from './column.model';
import { TableConfiguration } from './configuration.model';

/**
 * Represents an abstract class for CSPTable.
 * This class defines the structure that components implementing the table should follow.
 */
export abstract class CSPTable<T> {
  /**
   * The data source for the table.
   */
  abstract dataSource: T[] | Observable<T[]>;
  /**
   * The column definitions for the table.
   */
  abstract tableColumns: TableColumns<T>;
}
