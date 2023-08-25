import { Stickable, Stylizable } from './types';

/**
 * Represents the configuration of the table.
 */
export type TableConfiguration = {
  /**
   * The header configuration for the table.
   */
  header?: Stylizable & Stickable;
  /**
   * The footer configuration for the table.
   */
  footer?: Stylizable & Stickable;
};
