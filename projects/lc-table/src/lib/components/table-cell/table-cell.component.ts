import { Component, Input } from '@angular/core';
import { Column } from '../../models/column.model';

/**
 * Component for rendering table cells.
 */
@Component({
  selector: 'lc-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent {
  /**
   * The column associated with the cell.
   */
  @Input() column: Column;
  /**
   * The data element for the cell.
   */
  @Input() element?: any;
  /**
   * The type of cell (header, body, footer).
   */
  @Input() cellType: 'header' | 'body' | 'footer' = 'body';

  constructor() {}
}
