import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';

export const appRoutes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: '**', redirectTo: '' }
];
