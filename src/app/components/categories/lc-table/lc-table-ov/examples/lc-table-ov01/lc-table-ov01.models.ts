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
  },
  stock: {
    header: {
      content: 'Amount',
    },
  },
  price: {
    header: {
      content: 'Price',
    },
  },
};
