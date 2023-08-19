import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ComponentContainerComponent } from './component-container/component-container.component';
import { LcTableApiComponent } from './categories/lc-table/lc-table-api/lc-table-api.component';
import { LcTableExComponent } from './categories/lc-table/lc-table-ex/lc-table-ex.component';
import { LcTableOverviewComponent } from './categories/lc-table/lc-table-ov/lc-table-ov.component';
import { LcColorPickerOvComponent } from './categories/lc-color-picker/lc-color-picker-ov/lc-color-picker-ov.component';
import { LcColorPickerApiComponent } from './categories/lc-color-picker/lc-color-picker-api/lc-color-picker-api.component';
import { LcColorPickerExComponent } from './categories/lc-color-picker/lc-color-picker-ex/lc-color-picker-ex.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'categories',
  },
  {
    path: 'categories',
    component: ComponentContainerComponent,
    data: {
      sectionName: 'Components',
      oae: false,
    },
  },
  {
    path: 'table',
    component: ComponentContainerComponent,
    data: {
      sectionName: 'Table',
      oae: true,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        component: LcTableOverviewComponent,
      },
      {
        path: 'api',
        component: LcTableApiComponent,
      },
      {
        path: 'examples',
        component: LcTableExComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
    ],
  },
  {
    path: 'colorpicker',
    component: ComponentContainerComponent,
    data: {
      sectionName: 'Color picker',
      oae: true,
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
      {
        path: 'overview',
        component: LcColorPickerOvComponent,
      },
      {
        path: 'api',
        component: LcColorPickerApiComponent,
      },
      {
        path: 'examples',
        component: LcColorPickerExComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'categories',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
