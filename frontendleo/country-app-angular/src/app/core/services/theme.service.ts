import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public theme$ = this.darkModeSubject.asObservable();

  constructor() {
    // Recuperar preferencia guardada
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.darkModeSubject.next(JSON.parse(savedTheme));
    }
  }

  toggleTheme(): void {
    const current = this.darkModeSubject.value;
    this.darkModeSubject.next(!current);
    localStorage.setItem('darkMode', JSON.stringify(!current));
  }

  isDarkTheme(): boolean {
    return this.darkModeSubject.value;
  }
} 