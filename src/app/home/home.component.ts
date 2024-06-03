import { Component, Input } from '@angular/core';
import { CountriesApiService } from '../countries-api.service';
import { CountryHome } from '../../types/country';
import { CountryCardComponent } from '../country-card/country-card.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CountryCardComponent],
  providers: [CountriesApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() filterName:string = ""
  countries: CountryHome[] = [];
  filteredCountries: CountryHome[] = []

  constructor(private countriesService: CountriesApiService) {
    this.countriesService.get_countries(this.filterName).then((x: CountryHome[]) => {
      this.countries = x;
    });
  }

}
