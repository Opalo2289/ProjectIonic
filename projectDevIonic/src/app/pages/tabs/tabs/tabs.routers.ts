import { Routes } from "@angular/router";

export const TabsRoutes: Routes = [
  {
    path:'',
    redirectTo:'home',
   /*  loadComponent: () => import('../tabs/tabs.page').then(m => m.TabsPage), */
    pathMatch: 'full',
  },
  {
    path:'home',
    loadComponent: () => import('../home/home.page').then( m => m.HomePage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('../favorites/favorites.page').then( m => m.FavoritesPage)
  },
    {
    path: 'search',
    loadComponent: () => import('../search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('../perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'add-appointment',
    loadComponent: () => import('../add-appointment/add-appointment.page').then( m => m.AddAppointmentPage)
  }
];