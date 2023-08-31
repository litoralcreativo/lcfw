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
import { LcTableService } from 'lc-table';
import { LcColorPickerOvComponent } from './categories/lc-color-picker/lc-color-picker-ov/lc-color-picker-ov.component';
import { LcColorPickerApiComponent } from './categories/lc-color-picker/lc-color-picker-api/lc-color-picker-api.component';
import { LcColorPickerExComponent } from './categories/lc-color-picker/lc-color-picker-ex/lc-color-picker-ex.component';
import { LcTableOv01Component } from './categories/lc-table/lc-table-ov/examples/lc-table-ov01/lc-table-ov01.component';
import { LcTableOv02Component } from './categories/lc-table/lc-table-ov/examples/lc-table-ov02/lc-table-ov02.component';
import { LcTableOv03Component } from './categories/lc-table/lc-table-ov/examples/lc-table-ov03/lc-table-ov03.component';
import { LcTableOv04Component } from './categories/lc-table/lc-table-ov/examples/lc-table-ov04/lc-table-ov04.component';
import { LcTableOv05Component } from './categories/lc-table/lc-table-ov/examples/lc-table-ov05/lc-table-ov05.component';

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
    LcTableOv02Component,
    LcTableOv03Component,
    LcTableOv04Component,
    LcTableOv05Component,
  ],
  imports: [SharedModule, ComponentsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LcTableService],
})
export class ComponentsModule {}
