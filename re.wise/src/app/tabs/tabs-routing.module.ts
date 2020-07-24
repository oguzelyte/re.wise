import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'uploads',
        loadChildren: () => import('../uploads/uploads.module').then(m => m.UploadsPageModule)
      },
      {
        path: 'exam-info',
        loadChildren: () => import('../exam-info/exam-info.module').then(m => m.ExamInfoPageModule)
      },
      {
        path: 'study-groups',
        loadChildren: () => import('../study-groups/study-groups.module').then(m => m.StudyGroupsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
