export type ColumnDefinition = {
  label: string;
  headerStyle?: Partial<CSSStyleDeclaration>;
  dataStyle?: Partial<CSSStyleDeclaration>;
  footerStyle?: Partial<CSSStyleDeclaration>;
  footer?: () => any;
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
