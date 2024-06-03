export type Name = {
  common: string;
  official: string;
};

type Currency = {
  name: string;
  symbol: string;
};

export type Currencies = {
  [key: string]: Currency;
};

export type Languages = {
  [key: string]: string;
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};
