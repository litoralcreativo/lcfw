import { DATA_TYPE, TableColumns } from 'lc-table';

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

export const makeProducts = (): Product[] => {
  return Array(7)
    .fill(1)
    .map((x, i) => {
      const prod = {
        name: `${
          PRODUCT_NAMES[Math.floor(Math.random() * PRODUCT_NAMES.length)]
        } type ${i + 1}`,
        price: Number((Math.random() * 1000).toFixed(2)),
        amount: Math.floor(Math.random() * 100),
        date: new Date(
          2022,
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 28)
        ),
        owner: `owner-${i}`,
      };
      return prod;
    });
};

export type Product = {
  name: string;
  price: number;
  amount: number;
  totalPrice?: number;
  date: Date;
};

export const TABLE_COLUMNS: TableColumns<Product> = {
  name: {
    header: {
      content: 'Name',
    },
    footer: {
      content: 'Total',
      style: {
        fontWeight: '500',
      },
    },
  },
  date: {
    header: {
      content: 'Date',
    },
    data: {
      type: DATA_TYPE.date,
      pipe: {
        format: 'dd/MM/yyyy',
      },
    },
  },
  price: {
    header: {
      content: 'Unit price',
      align: 'right',
    },
    data: {
      type: DATA_TYPE.currency,
      style: {
        textAlign: 'right',
      },
    },
  },
  amount: {
    header: {
      content: 'Amount',
    },
    footer: {
      style: {
        fontWeight: '500',
      },
    },
  },
  totalPrice: {
    header: {
      content: 'Total price',
      align: 'right',
    },
    data: {
      type: DATA_TYPE.currency,
      style: {
        textAlign: 'right',
      },
    },
    footer: {
      type: DATA_TYPE.currency,
      style: {
        fontWeight: '500',
        textAlign: 'right',
      },
    },
  },
};
