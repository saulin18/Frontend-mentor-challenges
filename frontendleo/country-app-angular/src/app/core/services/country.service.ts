import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Country } from '../models/country.interface';
import data from './data.json';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesSubject = new BehaviorSubject<Country[]>([]);
  public countries$ = this.countriesSubject.asObservable();

  constructor() {
    this.loadCountries();
  }

  private loadCountries(): void {
    const sampleCountries: Country[] = data as Country[];
    
    this.countriesSubject.next(sampleCountries);
  }

  getCountries(): Observable<Country[]> {
    return this.countries$;
  }

  filterCountries(searchTerm: string, region: string): Observable<Country[]> {
    return this.countries$.pipe(
      map(countries => {
        let filtered = countries;

        if (searchTerm) {
          filtered = filtered.filter(country =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        if (region && region !== 'All') {
          filtered = filtered.filter(country =>
            country.region === region
          );
        }

        return filtered;
      })
    );
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.countries$.pipe(
      map(countries => 
        region === 'All' ? countries : countries.filter(country => country.region === region)
      )
    );
  }

  getCountryByName(name: string): Observable<Country> {
    return this.countries$.pipe(
      map(countries => countries.find(country => country.name === name) as Country)
    );
  }
}   