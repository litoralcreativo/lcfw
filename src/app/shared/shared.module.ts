import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

@NgModule({
  declarations: [SectionHeaderComponent],
  imports: [MaterialModule],
  exports: [MaterialModule, SectionHeaderComponent],
})
export class SharedModule {}
