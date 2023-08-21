import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LcTableComponent } from './lc-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [LcTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [LcTableComponent],
})
export class LcTableModule {}
