import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Country } from '../../../core/models/country.interface';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CountryService } from '../../../core/services/country.service';
import { Nav } from "../../ui/nav/nav";
import { Location } from '@angular/common';
import { Language } from '../../../core/models/country.interface';
import { Currency } from '../../../core/models/country.interface';


@Component({
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, Nav],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {

  country: Country | null = null;
  constructor(private route: ActivatedRoute, private countryService: CountryService, private location: Location) {}

  ngOnInit() {
    this.countryService.getCountryByName(this.route.snapshot.params['name']).subscribe(country => this.country = country);
  }

  goBack() {
    this.location.back();
  }

  getCurrencies(currencies: Currency[]) {
    return Object.values(currencies).map((currency: Currency) => currency.name).join(', ');
  }

  getLanguages(languages: Language[]) {
    return Object.values(languages).map((language: Language) => language.name).join(', ');
  }


}
