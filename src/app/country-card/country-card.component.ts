import { Component, Input } from '@angular/core';
import { CountryHome } from '../../types/country';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input() countryHome!: CountryHome;

  outputToConsole() {
    console.log('Clicked');
  }
}
