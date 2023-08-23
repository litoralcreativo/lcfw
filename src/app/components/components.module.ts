import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { LcTableOverviewComponent } from './categories/lc-table/lc-table-ov/lc-table-ov.component';
import { LcTableApiComponent } from './categories/lc-table/lc-table-api/lc-table-api.component';
import { ComponentContainerComponent } from './component-container/component-container.component';
import { LcTableExComponent } from './categories/lc-table/lc-table-ex/lc-table-ex.component';
import { SideListComponent } from './side-list/side-list.component';
import { LcColorPickerOvComponent } from './categories/lc-color-picker/lc-color-picker-ov/lc-color-picker-ov.component';
import { LcColorPickerApiComponent } from './categories/lc-color-picker/lc-color-picker-api/lc-color-picker-api.component';
import { LcColorPickerExComponent } from './categories/lc-color-picker/lc-color-picker-ex/lc-color-picker-ex.component';
import { LcTableOv01Component } from './categories/lc-table/lc-table-ov/examples/lc-table-ov01/lc-table-ov01.component';
import { LcTableService } from 'lc-table';

@NgModule({
  declarations: [
    LcTableOverviewComponent,
    CategoriesComponent,
    LcTableApiComponent,
    ComponentContainerComponent,
    LcTableExComponent,
    SideListComponent,
    LcColorPickerOvComponent,
    LcColorPickerApiComponent,
    LcColorPickerExComponent,
    LcTableOv01Component,
  ],
  imports: [SharedModule, ComponentsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LcTableService],
})
export class ComponentsModule {
  constructor(private tableService: LcTableService) {
    /* let fss: Partial<CSSStyleDeclaration> = {fontSize: '12px'}
    fss.setProperty('font-size', '12px') */

    this.tableService.setConfig({
      header: {
        sticky: true,
        style: {
          backgroundColor: 'rgb(245, 245, 245)',
          color: 'gray',
          fontSize: 'small',
          borderBottom: '1px solid lightgray',
          boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.2)',
        },
      },
      footer: {
        sticky: true,
        style: {
          backgroundColor: 'rgb(245, 245, 245)',
          fontSize: 'small',
          borderTop: '1px solid lightgray',
        },
      },
    });
  }
}
