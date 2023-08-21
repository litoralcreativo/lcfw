export type ColumnDefinition = {
  label: string;
};

export type TableColumns<T> = {
  [P in keyof T]?: ColumnDefinition;
};

export class Column {
  readonly property: string;
  private readonly definition: ColumnDefinition;
  label: string;
  constructor(property: string, definition: ColumnDefinition) {
    this.property = property;
    this.definition = definition;
    this.label = this.definition.label;
  }
}
