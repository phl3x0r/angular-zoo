import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'monkey',
    pathMatch: 'full'
  },

  {
    path: 'penguin',
    loadChildren: './penguinmodule/penguin.module#PenguinModule'
  },
  {
    path: 'monkey',
    loadChildren: './monkeymodule/monkey.module#MonkeyModule'
  }
];
