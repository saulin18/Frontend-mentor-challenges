import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Country } from '../../../../core/models/country.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './country-card.html',
  styleUrl: './country-card.css'
})
export class CountryCard {
  @Input() country!: Country;

  constructor(private router: Router) {}

  onCardClick(): void {
    this.router.navigate(['/detail', this.country.name]);
  }
}
