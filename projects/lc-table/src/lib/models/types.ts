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
 * Represents the pipeable options for columns.
 */
export type Pipeable = {
  pipe?: {
    currencyCode?: string;
    display?: string;
    digitsInfo?: string;
    format?: string;
  };
};

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
