import { Component, OnInit, ViewChild } from '@angular/core';
import { makeProducts, Product, TABLE_COLUMNS } from './lc-table-ov06.models';
import {
  CSPTable,
  FilterPredicate,
  LcTableComponent,
  TableColumns,
} from 'lc-table';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { tap } from 'rxjs';

@Component({
  selector: 'lc-table-ov06',
  templateUrl: './lc-table-ov06.component.html',
  styleUrls: ['./lc-table-ov06.component.scss'],
})
export class LcTableOv06Component extends CSPTable<Product> implements OnInit {
  @ViewChild(LcTableComponent) lctable: LcTableComponent<Product>;

  dataSource: Product[] = makeProducts();
  tableColumns: TableColumns<Product> = TABLE_COLUMNS;
  filterFormGroup: FormGroup;

  filterState: {
    name?: string;
    dateFrom?: Date;
    dateTo?: Date;
  } = {};
  editingForm: boolean;

  constructor() {
    super();
  }
  ngOnInit(): void {
    this.dataSource.forEach((x) => (x.totalPrice = x.amount * x.price));
    this.updateFooter(this.dataSource);
    this.filterFormGroup = new FormGroup({
      name: new FormControl(''),
      dateFrom: new FormControl(''),
      dateTo: new FormControl(''),
    });
  }

  updateFooter(dataSource: Product[]) {
    let result = (0).toFixed(2);
    if (dataSource.length !== 0) {
      result = dataSource
        .map((x) => x.totalPrice || 0)
        .reduce((a, b) => a + b)
        .toFixed(2);
    }
    this.tableColumns.totalPrice!.footer!.content = result;
  }

  ngAfterViewInit() {
    this.lctable?.setFilterPredicate(this.customFilter);
    this.filterFormGroup.valueChanges
      .pipe(
        tap((x) => (this.editingForm = true)),
        debounceTime(1000),
        tap((x) => (this.editingForm = false))
      )
      .subscribe((res) => this.filter());
  }

  filter() {
    const { name, dateFrom, dateTo } = this.filterFormGroup.value;
    this.filterState.name = name;
    this.filterState.dateFrom = dateFrom;
    this.filterState.dateTo = dateTo;
    this.lctable?.filter();
    this.updateFooter(this.lctable._dataSource.filteredData);
  }

  customFilter: FilterPredicate<Product> = (product: Product): boolean => {
    if (this.filterState.name && !product.name.includes(this.filterState.name))
      return false;
    if (this.filterState.dateFrom && product.date < this.filterState.dateFrom)
      return false;
    if (this.filterState.dateTo && product.date > this.filterState.dateTo)
      return false;
    return true;
  };
}
