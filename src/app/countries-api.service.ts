import { Injectable } from '@angular/core';
import { CountryDetail, CountryHome } from '../types/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesApiService {
  private base_fields: string;
  private extra_fields: string;
  private countriesUrl: string;
  constructor() {
    this.base_fields = 'name,population,region,capital,flags';
    this.extra_fields = 'subregion,tld,currencies,languages,borders';
    this.countriesUrl = 'https://restcountries.com/v3.1';
  }

  async get_country(name: string): Promise<CountryDetail> {
    const country = await fetch(
      `${this.countriesUrl}/name/${name}?fields=${this.base_fields},${this.extra_fields}`
    );
    return await country.json();
  }

  async get_countries(name: string): Promise<CountryHome[]> {
    console.log("calling")
    let url = `${this.countriesUrl}/all?fields=${this.base_fields}`;
    if (name !== '') {
      url = `${this.countriesUrl}/name/${name}?fields=${this.base_fields}`;
    }
    const countries = await fetch(url);
    return await countries.json();
  }
}
