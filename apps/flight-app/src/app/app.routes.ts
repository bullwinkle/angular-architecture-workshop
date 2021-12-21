import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: 'mf-passenger',
    loadChildren: () => loadRemoteModule<PassengerMf>({
      remoteName: 'passenger',
      exposedModule: './module',
    }).then(esm => esm.PassengerModule),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
