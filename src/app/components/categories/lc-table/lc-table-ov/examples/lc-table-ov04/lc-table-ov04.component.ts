import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { makeProducts, Product, TABLE_COLUMNS } from './lc-table-ov04.models';
import {
  CSPTable,
  DATA_TYPE,
  LcTableModule,
  TableColumns,
  TableConfiguration,
} from 'lc-table';

@Component({
  selector: 'lc-table-ov04',
  templateUrl: './lc-table-ov04.component.html',
  styleUrls: ['./lc-table-ov04.component.scss'],
})
export class LcTableOv04Component extends CSPTable<Product> implements OnInit {
  dataSource: Product[] = makeProducts();
  tableColumns: TableColumns<Product> = TABLE_COLUMNS;
  tableConfig: TableConfiguration = {
    header: {
      sticky: true,
      style: {
        backgroundColor: '#37474f',
        color: 'white',
      },
    },
    footer: {
      sticky: true,
    },
    pagination: {
      style: {
        borderTop: '1px solid lightgray',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      },
      pageSizeOptions: [5, 10, 25, 50],
    },
  };
  constructor() {
    super();
  }
  ngOnInit(): void {}
}
