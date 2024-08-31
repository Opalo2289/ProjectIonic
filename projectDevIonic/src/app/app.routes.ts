import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
 {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'specialty/:id',
    loadComponent: () => import('./specialty/specialty.page').then( m => m.SpecialtyPage)
  }, 
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs/tabs.page').then(m => m.TabsPage),
    loadChildren: () => import('../app/pages/tabs/tabs/tabs.routers').then( m => m.TabsRoutes)
  }


];
