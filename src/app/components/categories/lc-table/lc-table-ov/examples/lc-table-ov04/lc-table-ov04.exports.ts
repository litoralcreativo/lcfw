export const scss: string = ``.trim();

export const html: string = `
<div
  class="mat-elevation-z4"
  style="
    margin: 2rem;
    border-radius: 5px;
    max-height: 500px;
    overflow: auto;
    width: fit-content;
  "
>
  <lc-table
    [dataSource]="dataSource"
    [tableColumns]="tableColumns"
    [tableConfig]="tableConfig"
  ></lc-table>
</div>

`.trim();

export const ts: string = `
import { Component, OnInit } from '@angular/core';
import { makeProducts, Product, TABLE_COLUMNS } from './lc-table-ov04.models';
import { CSPTable, TableColumns, TableConfiguration } from 'lc-table';

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
`.trim();

export const models: string = `
import { DATA_TYPE, TableColumns } from 'lc-table';

export const makeProducts = (): Product[] => {
  const PRODUCT_NAMES = [
    'Rice',
    'Butter',
    'Salt',
    'Onions',
    'Cheese',
    'Milk',
    'Shampoo',
    'Soap',
    'Tomatoes',
    'Oranges',
    'Garlic',
    'Bananas',
  ];
  return Array(23)
    .fill(1)
    .map((x, i) => {
      const prod = {
        id: i,
        name: \`\${
          PRODUCT_NAMES[Math.floor(Math.random() * PRODUCT_NAMES.length)]
        }\${i}\`,
        unitPirce: Number((Math.random() * 1000).toFixed(2)),
        price: 0,
        amount: Math.floor(Math.random() * 100),
        date: new Date(),
        owner: \`owner-\${i}\`,
      };
      prod.price = Number((prod.unitPirce * prod.amount).toFixed(2));
      return prod;
    })
    .sort(() => (Math.random() > 0.5 ? 1 : -1));
};

export type Product = {
  id: number;
  name: string;
  unitPirce: number;
  amount: number;
  price: number;
  date: Date;
  owner: string;
};

export const TABLE_COLUMNS: TableColumns<Product> = {
  id: {
    header: {
      content: 'Id',
    },
    configuration: {
      sortable: true,
    },
  },
  name: {
    header: {
      content: 'Name',
    },
    configuration: {
      sortable: true,
    },
  },
  amount: {
    header: {
      content: 'Amount',
    },
    configuration: {
      sortable: true,
    },
  },
  unitPirce: {
    header: {
      content: 'Unit price',
      style: { textAlign: 'end' },
    },
    data: {
      type: DATA_TYPE.currency,
      pipe: {
        currencyCode: 'USD',
        display: 'symbol-narrow',
        digitsInfo: '',
      },
      style: { textAlign: 'end' },
    },
    configuration: {
      sortable: true,
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
        currencyCode: 'USD',
        display: 'symbol-narrow',
        digitsInfo: '',
      },
      style: { textAlign: 'end' },
    },
    configuration: {
      sortable: true,
    },
  },
};
`.trim();
