import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LcTableComponent } from './lc-table.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableCellComponent } from './components/table-cell/table-cell.component';

@NgModule({
  declarations: [LcTableComponent, TableCellComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatTableModule],
  exports: [LcTableComponent, TableCellComponent],
})
export class LcTableModule {}
