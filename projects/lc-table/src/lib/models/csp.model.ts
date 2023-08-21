import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnDefinition, TableColumns } from './column.model';

export abstract class CSPTable<T> {
  abstract dataSource: T[] | Observable<T[]>;
  abstract tableColumns: TableColumns<T>;
}
