import { Component, Input } from '@angular/core';
import { Column } from '../models/column.model';

@Component({
  selector: 'lc-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent {
  @Input() column: Column;
  @Input() element: any;
}
