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
  date: {
    header: {
      content: 'Date',
    },
    data: {
      type: DATA_TYPE.date,
    },
  },
};

export const makeProducts = (): Product[] => {
  return Array(17)
    .fill(1)
    .map((x, i) => {
      const prod = {
        name: `Producto ${i}`,
        unitPirce: Number((Math.random() * 1000).toFixed(2)),
        price: 0,
        amount: Math.floor(Math.random() * 100),
        date: new Date(),
        owner: `owner-${i}`,
      };
      prod.price = Number((prod.unitPirce * prod.amount).toFixed(2));
      return prod;
    });
};
