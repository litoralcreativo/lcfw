export const scss: string = `
.example-container {
  height: 300px;
  overflow: auto;
}
`.trim();

export const html: string = `
<div class="example-container mat-elevation-z4" style="margin: 2rem">
  <lc-table [dataSource]="dataSource" [tableColumns]="tableColumns"></lc-table>
</div>
`.trim();

export const ts: string = `
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

const getProducts = (): Product[] => {
  return Array(10)
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
  dataSource: Product[] = getProducts();
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
  constructor(private lcTableSer5vice: LcTableService) {
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
`.trim();
