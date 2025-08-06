import { Routes } from '@angular/router';
import { List } from '@app/components/list/list';


export const routes: Routes = [
  {
    path:'productos-form',
    loadComponent: ()=>import('./components/product-form/product-form').then(m=>m.ProductForm)
  },
  {
    path: 'categorias-list',
    loadComponent: ()=>import('./components/categoria-list/categoria-list').then(m=>m.CategoriaList)
  },
  {
    path: 'categorias-form',
    loadComponent: ()=>import('@app/components/categoria-form/categoria-form').then(m=>m.CategoriaForm)
  },
  {
    path: 'list',
    component: List
  },
  {
    path: 'login',
    loadComponent: ()=>import('@app/components/login/login').then(m=>m.Login)
  },
  {
    path:'**',
    redirectTo:'list',
    pathMatch: 'full'
  }
];
