import { Component, OnInit } from '@angular/core';
import { makeProducts, Product, TABLE_COLUMNS } from './lc-table-ov03.models';
import { CSPTable, TableColumns, TableConfiguration } from 'lc-table';

@Component({
  selector: 'lc-table-ov03',
  templateUrl: './lc-table-ov03.component.html',
  styleUrls: ['./lc-table-ov03.component.scss'],
})
export class LcTableOv03Component extends CSPTable<Product> implements OnInit {
  dataSource: Product[] = makeProducts();
  tableColumns: TableColumns<Product> = TABLE_COLUMNS;
  tableConfig: TableConfiguration = {
    header: {
      sticky: true,
      style: {
        fontWeight: '500',
        backgroundColor: '#37474f',
        color: 'white',
      },
    },
    footer: {
      sticky: true,
      style: {
        fontWeight: '500',
        backgroundColor: '#eceff1',
      },
    },
  };
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.tableColumns.price!.footer!.content = this.dataSource
      .map((x) => x.price)
      .reduce((a, b) => a + b)
      .toFixed(2);
  }
}
