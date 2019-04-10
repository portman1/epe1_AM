import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ncalculo2Page } from './ncalculo2.page';

const routes: Routes = [
  {
    path: '',
    component: Ncalculo2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ncalculo2Page]
})
export class Ncalculo2PageModule {}
