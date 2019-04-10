import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'calculo', loadChildren: './calculo/calculo.module#CalculoPageModule' },
  { path: 'acerca', loadChildren: './acerca/acerca.module#AcercaPageModule' },
  { path: 'calculodos', loadChildren: './calculodos/calculodos.module#CalculodosPageModule' },  { path: 'scalculo', loadChildren: './scalculo/scalculo.module#ScalculoPageModule' },
  { path: 'scalculo2', loadChildren: './scalculo2/scalculo2.module#Scalculo2PageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
