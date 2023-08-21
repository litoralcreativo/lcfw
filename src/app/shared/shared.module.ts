import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { TitleDescriptionCardComponent } from './components/title-description-card/title-description-card.component';
import { GridOfCardsComponent } from './components/grid-of-cards/grid-of-cards.component';
import { LcTableModule } from 'lc-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SectionHeaderComponent,
    TitleDescriptionCardComponent,
    GridOfCardsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LcTableModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LcTableModule,
    SectionHeaderComponent,
    TitleDescriptionCardComponent,
    GridOfCardsComponent,
  ],
})
export class SharedModule {}
