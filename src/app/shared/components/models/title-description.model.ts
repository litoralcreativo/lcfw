export type TitleDescriptionModel = {
  title: string;
  description: string;
};

export type TitleDescriptionAsyncModel = TitleDescriptionModel & {
  cols: number;
  rows: number;
};
