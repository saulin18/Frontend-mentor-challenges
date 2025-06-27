import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '../../../../core/models/country.interface';
import { CountryCard } from '../country-card/country-card';

@Component({
  selector: 'app-country-list',
  imports: [CommonModule, CountryCard],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryList {
  @Input() countries: Country[] = [];
  @Output() countryClick = new EventEmitter<Country>();

  onCountryClick(country: Country): void {
    this.countryClick.emit(country);
  }
}
