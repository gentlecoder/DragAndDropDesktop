/**
 * Creator: 10206072
 * Date: 2018/1/30
 * Time: 17:17
 *
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutModule'
  },
  // {
  //   path: '**',
  //   component: TestComponent,
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
        enableTracing: true
      }),
    // <-- debugging purposes only
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
