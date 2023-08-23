import { Stickable, Stylizable } from './types';

export type TableConfiguration = {
  header?: Stylizable & Stickable;
  footer?: Stylizable & Stickable;
};
