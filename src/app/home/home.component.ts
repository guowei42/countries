import { Component, Input } from '@angular/core';
import { CountriesApiService } from '../countries-api.service';
import { CountryHome } from '../../types/country';
import { CountryCardComponent } from '../country-card/country-card.component';
import { CommonModule } from '@angular/common';
import {
  Observable,
  Subject,
  debounce,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CountryCardComponent],
  providers: [CountriesApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() filterName: string = '';
  countries: CountryHome[] = [];
  filteredCountries: CountryHome[] = [];
  private searchText = new Subject<string>();

  constructor(private countriesService: CountriesApiService) {
    this.countriesService
      .get_countries(this.filterName)
      .then((x: CountryHome[]) => {
        this.countries = x;
      });
  }

  ngOnInit() {
    this.searchText.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((search) =>
        this.countriesService.get_countries(search).then((x: CountryHome[]) => {
          //this.countries = x;
          console.log("x")
        })
      )
    ).subscribe();
  }

  ngOnDestroy() {
    this.searchText.complete();
  }

  search(event: Event) {
    console.log((event.target as HTMLInputElement).value)
    this.searchText.next((event.target as HTMLInputElement).value);
  }
}
