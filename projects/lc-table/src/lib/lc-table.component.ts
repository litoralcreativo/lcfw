import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FilterPredicate } from '../public-api';
import { LcTableService } from './lc-table.service';
import { Column, TableColumns } from './models/column.model';
import { TableConfiguration } from './models/configuration.model';
import { LcTableSelction } from './models/table-selection.model';

@Component({
  selector: 'lc-table',
  templateUrl: './lc-table.component.html',
  styleUrls: ['./lc-table.component.scss'],
})
export class LcTableComponent<T>
  extends LcTableSelction<T>
  implements OnInit, AfterViewInit
{
  @Input('dataSource') dataSource: T[] | Observable<T[]>;
  @Input('tableColumns') tableColumns: TableColumns<T>;
  @Input('tableConfig') tableConfig: TableConfiguration;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columns: Column[];
  columnNames: string[] = ['name'];
  hasFooter: boolean = false;

  constructor(private configuration: LcTableService) {
    super();
    this.tableConfig = configuration.getConfig();
  }

  ngOnInit(): void {
    this.setDataSource();
    this.setColumns();
  }

  ngAfterViewInit(): void {
    this.setSort();
    this.setPaginator();
  }

  private setDataSource() {
    if (!this.dataSource) throw new Error('[dataSource] must be provided');
    this._dataSource = new MatTableDataSource();

    if (this.dataSource instanceof Observable) {
      this.dataSource.subscribe({
        next: (dataSource) => {
          this._dataSource.data = dataSource;
        },
      });
    } else {
      this._dataSource.data = this.dataSource;
    }
  }

  private setColumns() {
    if (!this.tableColumns)
      throw new Error('[columnDefinition] must be provided');
    this.columns = Object.entries(this.tableColumns).map((x) => {
      const property = x[0] as string;
      const definition = this.tableColumns[property as keyof T];
      if (!definition)
        throw new Error(
          `Property ${property} is missing it's column definition`
        );
      return new Column(property, definition);
    });

    this.hasFooter = this.columns.some((x) => x.definition.footer);
    this.columnNames = this.columns.map((x) => x.property);
    this.setSelectionColumn();
  }

  private setSelectionColumn() {
    if (this.tableConfig.selection)
      this.columnNames.unshift('lcSelectionColumn');
  }

  private setSort() {
    this._dataSource.sort = this.sort;
  }

  private setPaginator() {
    this._dataSource.paginator = this.paginator;
  }

  setFilterPredicate(filterPredicate: FilterPredicate<T>) {
    this._dataSource.filterPredicate = filterPredicate;
  }

  filter() {
    this._dataSource.filter = '' + Math.random();
  }
}
