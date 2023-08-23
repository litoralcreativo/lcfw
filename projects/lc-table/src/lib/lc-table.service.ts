import { Injectable } from '@angular/core';
import { TableConfiguration } from './models/configuration.model';

@Injectable({
  providedIn: 'root',
})
export class LcTableService {
  private tableConfig: TableConfiguration = {};

  constructor() {}

  getConfig(): TableConfiguration {
    return this.tableConfig;
  }

  setConfig(tableConfig: TableConfiguration) {
    this.tableConfig = tableConfig;
  }
}
