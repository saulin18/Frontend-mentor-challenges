import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './components/pages/home/home';
import { Detail } from './components/pages/detail/detail';


export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },  
  { path: 'detail/:name', component: Detail, pathMatch: 'full' },
];

