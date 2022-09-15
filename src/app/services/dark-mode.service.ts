import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  isDarkMode: boolean = false;

  get colorScheme(): 'dark' | 'light' {
    return this.isDarkMode ? 'dark' : 'light';
  }

  constructor() { }
}
