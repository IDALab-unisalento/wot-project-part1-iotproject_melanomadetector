import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {IndexGuard} from '../guards/index.guard';
import {HomeGuard} from '../guards/home.guard';

const routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
