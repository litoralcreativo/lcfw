import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { timer, map } from 'rxjs';
import {
  ColumnDefinition,
  CSPTable,
  LcTableComponent,
  TableColumns,
} from 'lc-table';

class Product {
  name: string;
  price: number;
  stock: number;
  date: Date;
  constructor(name: string, price: number, stock: number, date: string) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.date = new Date(date);
  }
}

@Component({
  selector: 'lc-table-ov01',
  templateUrl: './lc-table-ov01.component.html',
  styleUrls: ['./lc-table-ov01.component.scss'],
})
export class LcTableOv01Component extends CSPTable<Product> implements OnInit {
  dataSource: Product[] | Observable<Product[]>;
  tableColumns: TableColumns<Product>;
  @ViewChild(LcTableComponent, { static: true })
  table: LcTableComponent<Product>;

  tsCode: string = `export type ABC = number`;
  cssCode: string = `.example { color: gray; }`;
  htmlCode: string = `<lc-table [dataSource]="this.dataSource" [tableColumns]="this.tableColumns"></lc-table>`;

  ngOnInit(): void {
    this.dataSource = timer(100).pipe(
      map<number, Product[]>((x) => {
        return [
          new Product('Rice', 2.5, 126, '11/02/2023'),
          new Product('Cheese', 4.2, 51, '03/01/2023'),
          new Product('Tomatoes', 0.4, 100, '23/01/2023'),
        ];
      })
    );

    this.tableColumns = {
      name: {
        label: 'Name',
      },
      price: {
        label: 'Price',
      },
      stock: {
        label: 'Amount',
      },
    };
  }
}
