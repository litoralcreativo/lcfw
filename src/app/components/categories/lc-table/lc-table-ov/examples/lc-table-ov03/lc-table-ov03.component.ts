import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, TABLE_COLUMNS } from './lc-table-ov03.models';
import {
  CSPTable,
  DATA_TYPE,
  LcTableModule,
  TableColumns,
  TableConfiguration,
} from 'lc-table';

const makeProducts = (): Product[] => {
  return Array(17)
    .fill(1)
    .map((x, i) => {
      const prod = {
        name: `Producto ${i}`,
        unitPirce: Number((Math.random() * 1000).toFixed(2)),
        price: 0,
        amount: Math.floor(Math.random() * 100),
        date: new Date(),
        owner: `owner-${i}`,
      };
      prod.price = Number((prod.unitPirce * prod.amount).toFixed(2));
      return prod;
    });
};

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
