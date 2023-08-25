export const scss: string = ``.trim();

export const html: string = `
<div class="mat-elevation-z4" style="margin: 2rem">
  <lc-table [dataSource]="dataSource" [tableColumns]="tableColumns"></lc-table>
</div>
`.trim();

export const ts: string = `
import { Component } from '@angular/core';
import { CSPTable, TableColumns } from 'lc-table';
import { Product, TABLE_COLUMNS } from './lc-table-ov01.models';

const makeProducts = (): Product[] => {
  return Array(5)
    .fill(1)
    .map((x, i) => ({
      name: \`Producto \${i}\`,
      price: Number((Math.random() * 1000).toFixed(2)),
      stock: Math.floor(Math.random() * 100),
      date: new Date(),
      owner: \`owner-\${i}\`,
    }));
};

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
  },
  stock: {
    header: {
      content: 'Amount',
    },
  },
  price: {
    header: {
      content: 'Price',
    },
  },
};
`.trim();
