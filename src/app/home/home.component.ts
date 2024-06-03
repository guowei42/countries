import { Component } from '@angular/core';
import { CountriesApiService } from '../countries-api.service';
import { CountryHome } from '../../types/country';
import { CountryCardComponent } from '../country-card/country-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CountryCardComponent],
  providers: [CountriesApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  countries: CountryHome[] = [];

  constructor(private countriesService: CountriesApiService) {
    this.countriesService.get_countries().then((x: CountryHome[]) => {
      this.countries = x;
    });
  }

}
