export const scss: string = `
.example-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 2rem;
  gap: 2rem;

  > div {
    max-height: inherit;
    height: inherit;
    max-height: 380px;

    .table-container {
      border-radius: 5px;
      overflow: hidden;
      max-height: 500px;
      width: fit-content;
      height: fit-content;
    }
  }
}
`.trim();

export const html: string = `
<div class="example-container">
  <div>
    <div class="table-container mat-elevation-z4">
      <lc-table
        #table
        [dataSource]="dataSource"
        [tableColumns]="tableColumns"
        [tableConfig]="tableConfig"
      ></lc-table>
    </div>
  </div>
  <div>
    <app-json-viewer [code]="table.selection.selected"></app-json-viewer>
  </div>
</div>

`.trim();

export const ts: string = `
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
    pagination: {},
  };
  constructor() {
    super();
  }
  ngOnInit(): void {}
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
  date: {
    header: {
      content: 'Date',
    },
  },
};

export const makeProducts = (): Product[] => {
  return Array(7)
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
