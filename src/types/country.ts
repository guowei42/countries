import { Name, Currencies, Languages, Flags } from './extra';

export type CountryHome = {
  name: Name;
  population: number;
  region: string;
  capital: string[];
  flags: Flags;
};

export type CountryDetail = {
  sub_region: string;
  top_domain: string[];
  currencies: Currencies;
  languages: Languages;
  borders: string[];
} & CountryHome;
