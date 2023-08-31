import { DATA_TYPE, TableColumns } from 'lc-table';

export const makeProducts = (): Product[] => {
  const PRODUCT_NAMES = [
    'Rice',
    'Butter',
    'Salt',
    'Onions',
    'Cheese',
    'Milk',
    'Shampoo',
    'Soap',
    'Tomatoes',
    'Oranges',
    'Garlic',
    'Bananas',
  ];
  return Array(23)
    .fill(1)
    .map((x, i) => {
      const prod = {
        id: i,
        name: `${
          PRODUCT_NAMES[Math.floor(Math.random() * PRODUCT_NAMES.length)]
        }${i}`,
        unitPirce: Number((Math.random() * 1000).toFixed(2)),
        price: 0,
        amount: Math.floor(Math.random() * 100),
        date: new Date(),
        owner: `owner-${i}`,
      };
      prod.price = Number((prod.unitPirce * prod.amount).toFixed(2));
      return prod;
    })
    .sort(() => (Math.random() > 0.5 ? 1 : -1));
};

export type Product = {
  id: number;
  name: string;
  unitPirce: number;
  amount: number;
  price: number;
  date: Date;
  owner: string;
};

export const TABLE_COLUMNS: TableColumns<Product> = {
  id: {
    header: {
      content: 'Id',
    },
    configuration: {
      sortable: true,
    },
  },
  name: {
    header: {
      content: 'Name',
    },
    configuration: {
      sortable: true,
    },
  },
  amount: {
    header: {
      content: 'Amount',
    },
    configuration: {
      sortable: true,
    },
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
    configuration: {
      sortable: true,
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
    configuration: {
      sortable: true,
    },
  },
};
