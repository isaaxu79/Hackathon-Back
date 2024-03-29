import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'camara-galeria', loadChildren: './camara-galeria/camara-galeria.module#CamaraGaleriaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'feed-favorito', loadChildren: './feed-favorito/feed-favorito.module#FeedFavoritoPageModule' },
  { path: 'formulario-adopcion', loadChildren: './formulario-adopcion/formulario-adopcion.module#FormularioAdopcionPageModule' },
  { path: 'crear-adopcion', loadChildren: './crear-adopcion/crear-adopcion.module#CrearAdopcionPageModule' },
  { path: 'slide-menu', loadChildren: './slide-menu/slide-menu.module#SlideMenuPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  // { path: 'servicios-list', loadChildren: './servicios-list/servicios-list.module#ServiciosListPageModule'},
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'feed-adopcion', loadChildren: './feed-adopcion/feed-adopcion.module#FeedAdopcionPageModule' },
  // { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  // { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  { path: 'feed-adopcion', loadChildren: './feed-adopcion/feed-adopcion.module#FeedAdopcionPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
