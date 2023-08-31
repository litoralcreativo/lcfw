import { DATA_TYPE, TableColumns } from 'lc-table';

export type Product = {
  name: string;
  unitPirce: number;
  amount: number;
  price: number;
  date: Date;
  owner: string;
};

export const TABLE_COLUMNS: TableColumns<Product> = {
  name: {
    header: {
      content: 'Name',
    },
    footer: {
      content: 'Total',
    },
  },
  amount: {
    header: {
      content: 'Amount',
    },
    footer: {},
  },
  unitPirce: {
    header: {
      content: 'Unit price',
      style: { textAlign: 'end' },
    },
    data: {
      type: DATA_TYPE.currency,
      pipe: {
        currencyCode: 'USD',
        display: 'symbol-narrow',
        digitsInfo: '',
      },
      style: { textAlign: 'end' },
    },
  },
  price: {
    header: {
      content: 'Price',
      style: { textAlign: 'end' },
    },
    data: {
      type: DATA_TYPE.currency,
      pipe: {
        currencyCode: 'USD',
        display: 'symbol-narrow',
        digitsInfo: '',
      },
      style: { textAlign: 'end' },
    },
    footer: {
      type: DATA_TYPE.currency,
      pipe: {
        currencyCode: 'USD',
        display: 'symbol-narrow',
        digitsInfo: '',
      },
      style: { textAlign: 'end' },
    },
  },
};
