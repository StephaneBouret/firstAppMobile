import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'galerie',
    loadChildren: () => import('./galerie/galerie.module').then( m => m.GaleriePageModule)
  },
  {
    path: 'meteo',
    loadChildren: () => import('./meteo/meteo.module').then( m => m.MeteoPageModule)
  },
  {
    path: 'lieux',
    loadChildren: () => import('./lieux/lieux.module').then( m => m.LieuxPageModule)
  },
  {
    path: 'details-image',
    loadChildren: () => import('./details-image/details-image.module').then( m => m.DetailsImagePageModule)
  },
  {
    path: 'new-lieu',
    loadChildren: () => import('./new-lieu/new-lieu.module').then( m => m.NewLieuPageModule)
  },
  {
    path: 'details-lieu',
    loadChildren: () => import('./details-lieu/details-lieu.module').then( m => m.DetailsLieuPageModule)
  },
  {
    path: 'update-lieu',
    loadChildren: () => import('./update-lieu/update-lieu.module').then( m => m.UpdateLieuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
