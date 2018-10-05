import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'penguin',
    pathMatch: 'full'
  },

  {
    path: 'penguin',
    loadChildren: './penguinmodule/penguin.module#PenguinModule'
  }
];
