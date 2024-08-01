import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./page/page.module').then((m) => m.PageModule),
      },
      
      
];
