import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  menuType: string;
  selectedMenu: any = {};
  subVisible = false;
  navLock: boolean;
  // 拖动卡片参数
  dashboardNavPanelData: any;
  // 新增卡片参数
  widgetAddData: object;
  // 保存卡片布局
  saveWidget: boolean;
  // 重置卡片布局
  resetWidget: boolean;
  // 隐藏左侧菜单
  hideSubMenu: boolean;
  // 拖拽控制
  cardDragAndDrop: boolean;
  // 重新获取左侧菜单
  regainSubMenu: boolean;
  // 拖拽编排时菜单的缓存
  menuItemsDataTmp: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.menuType = this.route.snapshot.params['type'];
  }

  changeMenu(menu: any) {
    this.selectedMenu = menu;
    this.subVisible = true;
  }

  getDashboardNavPanel(dashboardNavPanelData: any) {
    this.dashboardNavPanelData = dashboardNavPanelData;
  }

  /**
   * 新增卡片
   * @param {Object} widget
   */
  addWidget(widget: object) {
    this.widgetAddData = widget;
  }

  /**
   * 改变卡片状态
   * @param {boolean} cardDragAndDrop
   */
  changeCardStatus(cardDragAndDrop: boolean) {
    this.cardDragAndDrop = cardDragAndDrop;
  }

  /**
   * 保存卡片
   * @param {boolean} saveFlag
   */
  saveCardEdit(saveFlag: boolean) {
    this.navLock = !this.navLock;
    this.cardDragAndDrop = false;
    this.menuItemsDataTmp && window.localStorage.setItem('menuItemsData', JSON.stringify(this.menuItemsDataTmp));
    saveFlag && (this.saveWidget = !this.saveWidget);
  }

  /**
   * 重置卡片
   */
  resetCardEdit() {
    this.resetWidget = !this.resetWidget;
  }

  /**
   * 隐藏左侧菜单
   */
  hideSubMenus() {
    this.hideSubMenu = !this.hideSubMenu;
  }

  /**
   * 重新获取左侧菜单
   */
  regainSubMenus() {
    this.regainSubMenu = !this.regainSubMenu;
  }

  /**
   * 获取菜单缓存
   * @param menus
   */
  getMenuItemsDataTmp(menus) {
    this.menuItemsDataTmp = menus;
  }

  goBack() {
    this.router.navigate(['./'], {relativeTo: this.route});
    this.subVisible = false;
  }

  refresh() {

  }
}
