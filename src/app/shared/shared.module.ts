import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { TitleDescriptionCardComponent } from './components/title-description-card/title-description-card.component';
import { GridOfCardsComponent } from './components/grid-of-cards/grid-of-cards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SectionHeaderComponent,
    TitleDescriptionCardComponent,
    GridOfCardsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MaterialModule,
    SectionHeaderComponent,
    TitleDescriptionCardComponent,
    GridOfCardsComponent,
  ],
})
export class SharedModule {}
