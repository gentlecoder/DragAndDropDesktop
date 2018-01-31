import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LayoutComponent} from './layout.component';

import {ThirdComponent} from '../pages/third/third.component';
import {DashboardNavPanelComponent} from '../pages/dashboard/dashboard-nav-panel/dashboard-nav-panel.component';

const layoutRoutes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'dashboard-nav-panel',
        component: DashboardNavPanelComponent,
        children: []
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class LayoutRoutingModule {
}
