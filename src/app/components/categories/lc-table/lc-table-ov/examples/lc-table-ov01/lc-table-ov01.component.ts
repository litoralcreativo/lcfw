import { Component } from '@angular/core';
import { TableConfiguration } from 'dist/lc-table/lib/models/configuration.model';
import { CSPTable, DATA_TYPE, TableColumns } from 'lc-table';

type Product = {
  name: string;
  price: number;
  stock: number;
  date: Date;
  owner: string;
};

const PRODUCTS: Product[] = [
  {
    name: 'Rice',
    price: 2.5,
    stock: 126,
    date: new Date('2023-02-11'),
    owner: 'gchatele',
  },
  {
    name: 'Cheese',
    price: 402,
    stock: 51,
    date: new Date('2023-01-03'),
    owner: 'gchatele',
  },
  {
    name: 'Tomatoes',
    price: 0.4,
    stock: 100,
    date: new Date('2023-01-23'),
    owner: 'gchatele',
  },
  {
    name: 'Potatoes',
    price: 0.6,
    stock: 97,
    date: new Date('2023-01-11'),
    owner: 'gchatele',
  },
  {
    name: 'Bread',
    price: 1,
    stock: 22,
    date: new Date('2023-02-13'),
    owner: 'gchatele',
  },
  {
    name: 'Milk',
    price: 2.1,
    stock: 34,
    date: new Date('2023-03-02'),
    owner: 'gchatele',
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
      header: {
        content: 'Name',
      },
      footer: {
        content: 'Total',
        style: { fontWeight: '600', fontSize: '14px' },
      },
    },
    date: {
      header: {
        content: 'Creation',
      },
      data: {
        type: DATA_TYPE.date,
        pipe: { format: 'dd/MM/yyyy' },
      },
    },
    stock: {
      header: {
        content: 'Amount',
        style: { textAlign: 'end' },
      },
      data: {
        style: { textAlign: 'end' },
      },
      footer: {
        content: '',
        style: { textAlign: 'end', fontWeight: '600', fontSize: '14px' },
        type: DATA_TYPE.number,
        pipe: {
          digitsInfo: '',
        },
      },
    },
    price: {
      header: {
        content: 'Price',
        style: { textAlign: 'end' },
      },
      data: {
        type: DATA_TYPE.currency,
        pipe: {
          currencyCode: '$ ',
          display: 'symbol',
          digitsInfo: '1.2-2',
        },
        style: { textAlign: 'end' },
      },
      footer: {
        content: '',
        style: { fontWeight: '600', fontSize: '14px', textAlign: 'end' },
        type: DATA_TYPE.currency,
        pipe: {
          currencyCode: '$ ',
          display: 'symbol',
          digitsInfo: '1.2-2',
        },
      },
    },
  };
  tableConfig: TableConfiguration<Product> = {
    stickyHeader: true,
    stickyFooter: true,
  };
  constructor() {
    super();
  }

  ngOnInit() {
    if (this.tableColumns.price?.footer) {
      this.tableColumns.price.footer.content = this.dataSource
        .map((x) => x.price)
        .reduce((a, c) => a + c, 0)
        .toString();
    }

    if (this.tableColumns.stock?.footer) {
      this.tableColumns.stock.footer.content = this.dataSource
        .map((x) => x.stock)
        .reduce((a, c) => a + c, 0)
        .toString();
    }
  }
}
