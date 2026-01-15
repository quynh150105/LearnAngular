import { Routes } from '@angular/router';
import { SearchDemo } from './search/search.component';
import { FormDemo } from './form/form.component';

export const routes: Routes = [
  {
    path: 'form',
    // Dùng loadComponent thay vì component
    loadComponent: () => import('./form/form.component').then((m) => m.FormDemo),
  },
  {
    path: 'search',
    // Dùng loadComponent để phá vỡ vòng lặp dependency
    loadComponent: () => import('./search/search.component').then((m) => m.SearchDemo),
  },
];
