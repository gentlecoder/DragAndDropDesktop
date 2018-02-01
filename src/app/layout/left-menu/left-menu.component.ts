import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LeftMenuService} from './left-menu.service';
import ConstantsList from '../../app.config';

declare const $: any;

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less'],
  providers: [LeftMenuService]
})
export class LeftMenuComponent implements OnInit, OnChanges {
  // TODO 应用配置里面删除配置后刷新列表
  _searchValue: string;
  currentMenu: any;
  currentMenuIndex: number;
  isVisible = false;
  navLockUrl = './assets/images/lock.png';
  dashboardNavPanelData;

  @Input() navLock: boolean;
  @Input() hideSubMenu: boolean;
  @Input() regainSubMenu: boolean;
  @Output() selectedMenu = new EventEmitter<any>();
  @Output() enableCardDragAndDrop = new EventEmitter<boolean>();
  @Output() dashboardNavPanel = new EventEmitter<any>();
  @Output() widgetAddData = new EventEmitter<any>();

  menuItems: any[] = [];

  constructor(private router: Router, private  route: ActivatedRoute, private leftMenuService: LeftMenuService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['navLock'] && !changes['navLock']['firstChange']) {
      this.navLockUrl = './assets/images/lock.png';
    }
    if (changes['hideSubMenu'] && !changes['hideSubMenu']['firstChange']) {
      this.menuItems.map(v => v.select = false);
      this.isVisible = false;
    }
    if (changes['regainSubMenu'] && !changes['regainSubMenu']['firstChange']) {
      this.getMenus();
    }
  }

  ngOnInit() {
    this.getMenus();
    this.getDashboardNavPanel();
    this.getCurrentMenu(this.menuItems);
  }

  getCurrentMenu(menus: any[]) {
    const url = this.router.url.split('/layout/left/')[1];
    for (let i = 0; i < menus.length; i++) {
      const menu = menus[i];
      if (menu.children) {
        this.getCurrentMenu(menu.children);
      } else {
        if (url && url.indexOf('third') > -1) {
          if (menu.sysDefault && menu.appUrl == url.split('/')[1].replace(/%2F/g, '/')) {
            this.selectedMenu.emit(menu);
            return;
          }
        } else {
          if (menu.routerLink[0] == url) {
            this.selectedMenu.emit(menu);
            return;
          }
        }
      }
    }
  }

  getMenus() {
    this.leftMenuService.getMenuItems().subscribe(data => {
      this.menuItems = window.localStorage.getItem('menuItemsData') ?
        JSON.parse(window.localStorage.getItem('menuItemsData')) : data['data'];
      this.menuItems.map(v => v.select = false);
    });
  }

  getDashboardNavPanel() {
    this.leftMenuService.getDashboardNavPanel().subscribe(data => {
      this.dashboardNavPanelData = window.localStorage.getItem('dashboardNavPanelData') ?
        JSON.parse(window.localStorage.getItem('dashboardNavPanelData')) : data['data'];
      // 首次登陆，默认背景
      this.dashboardNavPanelData.bgUrl = this.dashboardNavPanelData.bgUrl ?
        this.dashboardNavPanelData.bgUrl : './assets/images/dashboard/bg/bg_001_big.jpg';
      this.dashboardNavPanel.emit(this.dashboardNavPanelData);
    });
  }

  changeMenu(menu: any, i) {
    // todo 点击第二次的时候隐藏
    if (menu.children) {
      this.menuItems.map(v => v.select = false);
      this.menuItems[i].select = true;
      this.currentMenu = menu;
      this.currentMenuIndex = i;
      this.isVisible = true;
    } else {
      this.clickSub(menu);
    }
  }

  clickSub(item: any) {
    this.menuItems.map(v => v.select = false);
    if (item.sysDefault) {
      this.router.navigate(['third', item.appUrl], {relativeTo: this.route});
    } else {
      this.router.navigate([item.routerLink], {relativeTo: this.route});
    }
    this.selectedMenu.emit(item);
    this.closeSub();
  }

  closeSub() {
    this.menuItems.map(v => v.select = false);
    this.isVisible = false;
  }

  addToDesktop(item: any, index) {
    item.added = true;
    // 新增后改变状态
    ConstantsList.menuItemsData[this.currentMenuIndex].children[index].added = true;
    this.menuItems[this.currentMenuIndex].children[index].added = true;
    window.localStorage.setItem('menuItemsData', JSON.stringify(this.menuItems));
    const tmp = {};
    tmp['router'] = item.routerLink;
    tmp['url'] = item.appUrl;
    tmp['id'] = item.appId;
    tmp['imgUrl'] = item.appLogo;
    tmp['title'] = item.appName;
    // 此处不能再用dashboardNavPanelData来传参，防止卡片已被拖动，里面已经改变
    this.widgetAddData.emit(tmp);
  }

  settingDesktop() {
    this.navLockUrl = './assets/images/unlock.png';
    this.enableCardDragAndDrop.emit(true);
  }
}
