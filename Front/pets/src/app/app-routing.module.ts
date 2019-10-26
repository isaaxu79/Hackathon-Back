import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'camara-galeria', loadChildren: './camara-galeria/camara-galeria.module#CamaraGaleriaPageModule' },
  { path: 'feed-adopcion', loadChildren: './feed-adopcion/feed-adopcion.module#FeedAdopcionPageModule' },
  { path: 'feed-match', loadChildren: './feed-match/feed-match.module#FeedMatchPageModule' },  
  { path: 'vista-individual', loadChildren: './vista-individual/vista-individual.module#VistaIndividualPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'feed-favorito', loadChildren: './feed-favorito/feed-favorito.module#FeedFavoritoPageModule' },
  { path: 'formulario-adopcion', loadChildren: './formulario-adopcion/formulario-adopcion.module#FormularioAdopcionPageModule' },
  { path: 'crear-adopcion', loadChildren: './crear-adopcion/crear-adopcion.module#CrearAdopcionPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
