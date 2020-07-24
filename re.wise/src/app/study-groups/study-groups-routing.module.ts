import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyGroupsPage } from './study-groups.page';

const routes: Routes = [
  {
    path: '',
    component: StudyGroupsPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyGroupsPageRoutingModule {}
