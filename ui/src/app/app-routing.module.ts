import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ae2TableComponent } from './ae2-table/ae2-table.component';
import { Ae2TableVerticalScrollComponent } from './ae2-table-vertical-scroll/ae2-table-vertical-scroll.component';

const routes: Routes = [
  {
      component: Ae2TableComponent,
      path: '',
  },
  {
      component: Ae2TableVerticalScrollComponent,
      path: 'table-vertical-scroll',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
