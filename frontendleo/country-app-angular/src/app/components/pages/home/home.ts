import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../core/models/country.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Nav } from '../../ui/nav/nav';
import { CountryList } from '../../features/countries/country-list/country-list';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule, RouterModule, Nav, CountryList, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  standalone: true,
  providers: [CountryService]
})
export class Home implements OnInit {
  countries: Country[] = [];
  selectedRegion = 'All';

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit() {
    // Load all countries initially
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }

  filterCountries(region: string, searchTerm: string) {
    this.selectedRegion = region;
    
    this.countryService.filterCountries(searchTerm, region).subscribe((filteredCountries) => {
      this.countries = filteredCountries;
    });
  }

  onCountryClick(country: Country): void {
    console.log('Country clicked:', country.name);
    this.router.navigate(['/detail', country.name]);
  }
}
