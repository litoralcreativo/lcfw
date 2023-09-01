export const scss: string = ``.trim();

export const html: string = `
<div class="mat-elevation-z4" style="margin: 2rem; width: fit-content">
  <lc-table [dataSource]="dataSource" [tableColumns]="tableColumns"></lc-table>
</div>
`.trim();

export const ts: string = `
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
`.trim();

export const models: string = `
import { TableColumns } from 'lc-table';

export type Product = {
  name: string;
  price: number;
  stock: number;
  date: Date;
  owner: string;
};

export const TABLE_COLUMNS: TableColumns<Product> = {
  name: {
    header: {
      content: 'Name',
    },
    footer: {
      content: 'Total',
      style: {
        fontWeight: '500',
      },
    },
  },
  stock: {
    header: {
      content: 'Amount',
    },
    footer: {
      style: {
        fontWeight: '500',
      },
    },
  },
  price: {
    header: {
      content: 'Price',
    },
    footer: {
      style: {
        fontWeight: '500',
      },
    },
  },
};

export const makeProducts = (): Product[] => {
  return Array(3)
    .fill(1)
    .map((x, i) => ({
      name: \`Producto \${i}\`,
      price: Number((Math.random() * 1000).toFixed(2)),
      stock: Math.floor(Math.random() * 100),
      date: new Date(),
      owner: \`owner-\${i}\`,
    }));
};

`.trim();
