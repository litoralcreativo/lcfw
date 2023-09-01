/**
 * Represents the available data types for columns.
 */
export const DATA_TYPE = {
  string: 'string',
  number: 'number',
  date: 'date',
  currency: 'currency',
} as const;
export type DataType = keyof typeof DATA_TYPE;

/**
 * Represents the stylizable options for columns.
 */
export type Stylizable = {
  style?: Partial<CSSStyleDeclaration>;
};

/**
 * Represents the typeable options for columns.
 */
export type Typeable = {
  type?: DataType;
};
export type Pipeable = NumberTypePipe | CurrencyTypePipe | DateTypePipe;

/**
 * Specific types and pipes
 */
/* export type NumberType = {
  type?: 'number';
} & NumberTypePipe; */
export type NumberTypePipe = {
  pipe?: {
    digitsInfo?: string;
  };
};

/* export type CurrencyType = {
  type?: 'currency';
} & CurrencyTypePipe; */
export type CurrencyTypePipe = {
  pipe?: {
    currencyCode?: string;
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean;
    digitsInfo?: string;
  };
};

/* export type DateType = {
  type?: 'date';
} & DateTypePipe; */
export type DateTypePipe = {
  pipe: {
    format?: string;
  };
};

/* export type StringType = {
  type?: 'string';
}; */

/**
 * Represents the contenible options for columns.
 */
export type Contenible = {
  content?: string;
};

/**
 * Represents the stickable options for columns.
 */
export type Stickable = {
  sticky?: boolean;
};

export type Coloreable = {
  color?: 'primary' | 'accent' | 'warn';
};

export type FilterPredicate<T> = (data: T) => boolean;
