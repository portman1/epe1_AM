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
  { path: 'ncalculo', loadChildren: './ncalculo/ncalculo.module#NcalculoPageModule' },
  { path: 'ncalculo2', loadChildren: './ncalculo2/ncalculo2.module#Ncalculo2PageModule' },
  { path: 'ccalculo', loadChildren: './ccalculo/ccalculo.module#CcalculoPageModule' },
  { path: 'ccalculo2', loadChildren: './ccalculo2/ccalculo2.module#Ccalculo2PageModule' },
  { path: 'acercados', loadChildren: './acercados/acercados.module#AcercadosPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
