import { TableColumns } from 'lc-table';

export type Product = {
  name: string;
  price: number;
  stock: number;
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
      style: {
        fontWeight: '500',
      },
    },
  },
  stock: {
    header: {
      content: 'Amount',
    },
    footer: {
      style: {
        fontWeight: '500',
      },
    },
  },
  price: {
    header: {
      content: 'Price',
    },
    footer: {
      style: {
        fontWeight: '500',
      },
    },
  },
};
