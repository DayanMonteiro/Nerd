import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const APP_ROUTES: Routes = [

  {
    path: 'lazy', 
    loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(m => m.LazyloadingModule)
  },

  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent } 
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);