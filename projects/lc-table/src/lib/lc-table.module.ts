import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LcTableComponent } from './lc-table.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [LcTableComponent, TableCellComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  exports: [LcTableComponent, TableCellComponent],
})
export class LcTableModule {}
