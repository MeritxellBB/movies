import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `about`, loadChildren: () =>
    import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },
  {
    path: `character`, loadChildren: () =>
    import('./pages/character-page/character-page.module').then(m => m.CharacterPageModule)
  },
  {
    path: ``, loadChildren: () =>
    import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: `movies`, loadChildren: () =>
    import('./pages/movies-page/movies-page.module').then(m => m.MoviesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
