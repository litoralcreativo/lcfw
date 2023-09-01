import { Component } from '@angular/core';
import { CSPTable, TableColumns } from 'lc-table';
import { makeProducts, Product, TABLE_COLUMNS } from './lc-table-ov01.models';

@Component({
  selector: 'lc-table-ov01',
  templateUrl: './lc-table-ov01.component.html',
  styleUrls: ['./lc-table-ov01.component.scss'],
})
export class LcTableOv01Component extends CSPTable<Product> {
  dataSource: Product[] = makeProducts();
  tableColumns: TableColumns<Product> = TABLE_COLUMNS;
  constructor() {
    super();
  }
}
