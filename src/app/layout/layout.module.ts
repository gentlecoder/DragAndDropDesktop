import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GridsterModule} from '../components/gridster/gridster.module';

import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {ThirdComponent} from '../pages/third/third.component';
import {DashboardNavPanelComponent} from '../pages/dashboard/dashboard-nav-panel/dashboard-nav-panel.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutRoutingModule,
    NgZorroAntdModule.forRoot(),
    GridsterModule
  ],
  declarations: [
    LayoutComponent,
    LeftMenuComponent,
    ThirdComponent,
    DashboardNavPanelComponent,
  ],
  exports: []
})
export class LayoutModule {
}
