export const DATA_TYPE = {
  string: 'string',
  number: 'number',
  date: 'date',
  currency: 'currency',
} as const;
export type DataType = keyof typeof DATA_TYPE;

type Pipeable = {
  pipe?:
    | { format: string }
    | { digitsInfo: string }
    | {
        currencyCode: string;
        display: string;
        digitsInfo: string;
      };
};

type Stylizable = {
  style?: Partial<CSSStyleDeclaration>;
};

type Typeable = {
  type?: DataType;
};

type Contenible = {
  content?: string;
};

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
