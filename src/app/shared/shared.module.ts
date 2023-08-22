import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { TitleDescriptionCardComponent } from './components/title-description-card/title-description-card.component';
import { GridOfCardsComponent } from './components/grid-of-cards/grid-of-cards.component';
import { LcTableModule } from 'lc-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

/* import * as hljs from 'highlight.js';
import typescrypt from 'highlight.js/lib/languages/typescrypt'
hljs.default.registerLanguage('typescript', typescrypt);
export function highlightJsFactory() {
  return hljs
} */

@NgModule({
  declarations: [
    SectionHeaderComponent,
    TitleDescriptionCardComponent,
    GridOfCardsComponent,
    CodeBoxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LcTableModule,
    HighlightModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LcTableModule,
    HighlightModule,
    SectionHeaderComponent,
    TitleDescriptionCardComponent,
    GridOfCardsComponent,
    CodeBoxComponent,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
})
export class SharedModule {}
