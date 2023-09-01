import { Component, OnInit } from '@angular/core';
import { makeProducts, Product, TABLE_COLUMNS } from './lc-table-ov02.models';
import { CSPTable, TableColumns } from 'lc-table';

@Component({
  selector: 'lc-table-ov02',
  templateUrl: './lc-table-ov02.component.html',
  styleUrls: ['./lc-table-ov02.component.scss'],
})
export class LcTableOv02Component extends CSPTable<Product> implements OnInit {
  dataSource: Product[] = makeProducts();
  tableColumns: TableColumns<Product> = TABLE_COLUMNS;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.tableColumns.price!.footer!.content = this.dataSource
      .map((x) => x.price)
      .reduce((a, b) => a + b)
      .toFixed(2);
    this.tableColumns.stock!.footer!.content = this.dataSource
      .map((x) => x.stock)
      .reduce((a, b) => a + b)
      .toString();
  }
}
