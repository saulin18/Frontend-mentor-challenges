import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule
 } from '@angular/material/icon';
 import { MatButtonModule } from '@angular/material/button';
 import { MatToolbarModule } from '@angular/material/toolbar';
import { Theme } from '../../../core/services/theme';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(private themeService: Theme) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkTheme() {
    return this.themeService.isDarkTheme();
  }

}
