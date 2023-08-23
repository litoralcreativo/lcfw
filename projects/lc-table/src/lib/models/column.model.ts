import { Stylizable, Contenible, Typeable, Pipeable } from './types';

export type ColumnDefinition = {
  header: Stylizable & Contenible;
  data?: Typeable & Stylizable & Pipeable;
  footer?: Typeable & Stylizable & Pipeable & Contenible;
};

export type TableColumns<T> = {
  [P in keyof T]?: ColumnDefinition;
};

export class Column {
  readonly property: string;
  readonly definition: ColumnDefinition;
  constructor(property: string, definition: ColumnDefinition) {
    this.property = property;
    this.definition = definition;
  }
}
