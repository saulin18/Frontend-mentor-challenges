import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();

  toggleTheme() {
    this.themeSubject.next(this.themeSubject.value === 'light' ? 'dark' : 'light');
  }


  isDarkTheme() {
    return this.themeSubject.value === 'dark';
  }

  constructor() {
    this.theme$.subscribe((theme) => {
      document.body.classList.toggle('dark', theme === 'dark');
    });
  }
}
