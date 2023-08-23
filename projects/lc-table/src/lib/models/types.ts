export const DATA_TYPE = {
  string: 'string',
  number: 'number',
  date: 'date',
  currency: 'currency',
} as const;
export type DataType = keyof typeof DATA_TYPE;

export type Pipeable = {
  pipe?: {
    currencyCode?: string;
    display?: string;
    digitsInfo?: string;
    format?: string;
  };
};

export type Stylizable = {
  style?: Partial<CSSStyleDeclaration>;
};

export type Typeable = {
  type?: DataType;
};

export type Contenible = {
  content?: string;
};

export type Stickable = {
  sticky?: boolean;
};
