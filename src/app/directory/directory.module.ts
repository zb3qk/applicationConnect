import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DirectoryPage } from './directory.page';

import { GetInfoService } from '../services/get-info.service'

const routes: Routes = [
  {
    path: '',
    component: DirectoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DirectoryPage],
  providers: [ GetInfoService ],
})
export class DirectoryPageModule {}
