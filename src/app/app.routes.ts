import { Routes } from '@angular/router';

// Route titles are translation keys, resolved by TranslatedTitleStrategy.
export const routes: Routes = [
  {
    path: '',
    title: 'pages.home.title',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'services',
    title: 'pages.services.title',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'contacts',
    title: 'pages.contacts.title',
    loadComponent: () => import('./pages/contacts/contacts').then((m) => m.Contacts),
  },
  {
    path: '**',
    title: 'pages.notFound.title',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
