import { Component, OnInit } from '@angular/core';
import { makeProducts, Product, TABLE_COLUMNS } from './lc-table-ov05.models';
import { CSPTable, TableColumns, TableConfiguration } from 'lc-table';

@Component({
  selector: 'lc-table-ov05',
  templateUrl: './lc-table-ov05.component.html',
  styleUrls: ['./lc-table-ov05.component.scss'],
})
export class LcTableOv05Component extends CSPTable<Product> implements OnInit {
  dataSource: Product[] = makeProducts();
  tableColumns: TableColumns<Product> = TABLE_COLUMNS;
  tableConfig: TableConfiguration = {
    header: {
      style: {
        backgroundColor: '#37474f',
        color: 'white',
      },
    },
    selection: {
      sellectAllToggle: true,
      style: {
        backgroundColor: 'white',
        borderRight: '1px solid #37474f33',
      },
      sticky: true,
    },
  };
  constructor() {
    super();
  }
  ngOnInit(): void {}
}
