import { Stylizable, Contenible, Typeable, Pipeable } from './types';

/**
 * Represents the definition of a column in the table.
 */
export type ColumnDefinition = {
  /**
   * The header information for the column.
   */
  header: Stylizable &
    Contenible & {
      align?: 'left' | ' center' | 'right';
    };
  /**
   * The data information for the column.
   */
  data?: Typeable & Stylizable & Pipeable;
  /**
   * The footer information for the column.
   */
  footer?: Typeable & Stylizable & Pipeable & Contenible;

  configuration?: {
    sortable?: boolean;
  };
};

/**
 * Represents the columns of the table.
 */
export type TableColumns<T> = {
  [P in keyof T]?: ColumnDefinition;
};

/**
 * Represents a column of the table.
 */
export class Column {
  /**
   * The property associated with the column.
   */
  readonly property: string;
  /**
   * The definition of the column.
   */
  readonly definition: ColumnDefinition;
  constructor(property: string, definition: ColumnDefinition) {
    this.property = property;
    this.definition = definition;
  }
}
