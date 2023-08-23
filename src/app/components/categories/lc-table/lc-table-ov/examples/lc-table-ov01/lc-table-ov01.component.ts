import { Component } from '@angular/core';
import { CSPTable, TableColumns } from 'lc-table';

type Product = {
  name: string;
  price: number;
  stock: number;
  date: Date;
};

const PRODUCTS: Product[] = [
  {
    name: 'Rice',
    price: 2.5,
    stock: 126,
    date: new Date('11/02/2023'),
  },
  {
    name: 'Cheese',
    price: 402,
    stock: 51,
    date: new Date('03/01/2023'),
  },
  {
    name: 'Tomatoes',
    price: 0.4,
    stock: 100,
    date: new Date('23/01/2023'),
  },
];

@Component({
  selector: 'lc-table-ov01',
  templateUrl: './lc-table-ov01.component.html',
  styleUrls: ['./lc-table-ov01.component.scss'],
})
export class LcTableOv01Component extends CSPTable<Product> {
  dataSource: Product[] = PRODUCTS;
  tableColumns: TableColumns<Product> = {
    name: {
      label: 'Name',
    },
    price: {
      label: 'Price',
      dataStyle: { textAlign: 'end' },
      headerStyle: { textAlign: 'end' },
    },
    stock: {
      label: 'Amount',
    },
  };
  constructor() {
    super();
  }
}
