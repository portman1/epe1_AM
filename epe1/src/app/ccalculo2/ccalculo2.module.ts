import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ccalculo2Page } from './ccalculo2.page';

const routes: Routes = [
  {
    path: '',
    component: Ccalculo2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ccalculo2Page]
})
export class Ccalculo2PageModule {}
