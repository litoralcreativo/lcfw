import { NgModule } from '@angular/core';
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
  ],
  imports: [CommonModule, ComponentsRoutingModule, SharedModule],
})
export class ComponentsModule {}
