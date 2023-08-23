import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Column, TableColumns } from './models/column.model';
import { TableConfiguration } from './models/configuration.model';

@Component({
  selector: 'lc-table',
  templateUrl: './lc-table.component.html',
  styleUrls: ['./lc-table.component.scss'],
})
export class LcTableComponent<T> implements OnInit {
  @Input('dataSource') dataSource: T[] | Observable<T[]>;
  @Input('tableColumns') tableColumns: TableColumns<T>;
  @Input('tableConfig') tableConfig: TableConfiguration<T>;
  columns: Column[];
  columnNames: string[] = ['name'];
  hasFooter: boolean = false;

  ngOnInit(): void {
    /* Check for errors */
    if (!this.dataSource) throw new Error('[dataSource] must be provided');
    if (!this.tableColumns)
      throw new Error('[columnDefinition] must be provided');

    this.setColumns();
  }

  setColumns() {
    /* Iterate this.tableColumns and create the columns */
    this.columns = Object.entries(this.tableColumns).map((x) => {
      const property = x[0] as string;
      const definition = this.tableColumns[property as keyof T];
      if (!definition)
        throw new Error(
          `Property ${property} is missing it's column definition`
        );
      return new Column(property, definition);
    });

    /* Define columnNames based on this.columns */
    this.columnNames = this.columns.map((x) => x.property);
    this.hasFooter = this.columns.some((x) => x.definition.footer);
  }
}
