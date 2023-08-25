import { Component } from '@angular/core';
import { TableConfiguration } from 'dist/lc-table/lib/models/configuration.model';
import { CSPTable, DATA_TYPE, LcTableService, TableColumns } from 'lc-table';

type Product = {
  name: string;
  price: number;
  stock: number;
  date: Date;
  owner: string;
};

const makeProducts = (): Product[] => {
  return Array(5)
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
  selector: 'lc-table-ov01',
  templateUrl: './lc-table-ov01.component.html',
  styleUrls: ['./lc-table-ov01.component.scss'],
})
export class LcTableOv01Component extends CSPTable<Product> {
  dataSource: Product[] = makeProducts();
  tableColumns: TableColumns<Product> = {
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
  constructor() {
    super();
  }
}
