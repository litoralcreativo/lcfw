import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, TABLE_COLUMNS } from './lc-table-ov02.models';
import { CSPTable, DATA_TYPE, LcTableModule, TableColumns } from 'lc-table';

const makeProducts = (): Product[] => {
  return Array(3)
    .fill(1)
    .map((x, i) => ({
      name: `Producto ${i}`,
      price: Number((Math.random() * 1000).toFixed(2)),
      stock: Math.floor(Math.random() * 100),
      date: new Date(),
      owner: `owner-${i}`,
    }));
};

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
