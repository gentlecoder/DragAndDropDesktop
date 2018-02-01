import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, SimpleChanges} from '@angular/core';
import {GridsterComponent} from '../../../components/gridster/gridster.component';
import {IGridsterOptions} from '../../../components/gridster/IGridsterOptions';
import {gridsterOptions} from '../dashboard-drag-option/gridster.options';
import {IGridsterDraggableOptions} from '../../../components/gridster/IGridsterDraggableOptions';
import {gridsterDraggableOptions} from '../dashboard-drag-option/gridster-draggable.options';
import {itemOptions} from '../dashboard-drag-option/item.options';
import {ActivatedRoute, Router} from '@angular/router';
import {DashboardNavPanelService} from './dashboard-nav-panel.service';
import {NzMessageService} from 'ng-zorro-antd';
import ConstantList from '../../../app.config';

declare const $: any;

@Component({
  selector: 'app-dashboard-nav-panel',
  templateUrl: './dashboard-nav-panel.component.html',
  styleUrls: ['./dashboard-nav-panel.component.less'],
  providers: [DashboardNavPanelService]
})
export class DashboardNavPanelComponent implements OnInit, OnChanges {
  devUrl: string = ConstantList.devUrl;
  // TODO 获取用户名
  userName: string;
  // 当前主题url
  bgUrl: string;
  // 主题地址选择
  themeImgList = [{url: './assets/images/dashboard/bg/bg_001_big.jpg', isSelect: true},
    {url: './assets/images/dashboard/bg/bg_002_big.jpg', isSelect: false},
    {url: './assets/images/dashboard/bg/bg_003_big.jpg', isSelect: false},
    {url: './assets/images/dashboard/bg/bg_004_big.jpg', isSelect: false},
    {url: './assets/images/dashboard/bg/bg_005_big.jpg', isSelect: false},
    {url: './assets/images/dashboard/bg/bg_006_big.jpg', isSelect: false},
    {url: './assets/images/dashboard/bg/bg_007_big.jpg', isSelect: false},
    {url: './assets/images/dashboard/bg/bg_008_big.jpg', isSelect: false}];
  selectThemeIndex = 0;
  selectThemeIndexTmp = 0;
  themeModalVisible = false;
  // slider实例
  slidey: any;
  slideyData: any;
  slideyTotal: number;

  // 拖拽组件参数
  @ViewChild(GridsterComponent) gridster: GridsterComponent;
  @Input() cardDragAndDrop: boolean;
  @Input() dashboardNavPanelData: any;
  @Input() widgetAddData: object;
  @Input() saveWidget: boolean;
  @Input() resetWidget: boolean;
  @Output() selectedMenu = new EventEmitter<any>();
  @Output() hideSubMenu = new EventEmitter<boolean>();
  @Output() regainSubMenu = new EventEmitter<boolean>();
  cardResizable = false;
  cardWidth = 1;
  cardHeight = 1;
  itemOptions = itemOptions;
  gridsterOptions: IGridsterOptions = gridsterOptions;
  gridsterDraggableOptions: IGridsterDraggableOptions = gridsterDraggableOptions;
  widgetsData;
  widgetsArray;

  // 左侧菜单组件tmp
  menuItemsDataTmp;


  constructor(private  route: ActivatedRoute, private router: Router,
              private dashboardNavPanelService: DashboardNavPanelService,
              private _message: NzMessageService) {
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['dashboardNavPanelData']) {
      if (this.dashboardNavPanelData) {
        this.userName = this.dashboardNavPanelData.userName;
        this.bgUrl = this.dashboardNavPanelData.bgUrl;
        console.log('widgetContent: ' + this.dashboardNavPanelData.widgetData);
        if (typeof(this.dashboardNavPanelData.widgetData) === 'object') {
          this.widgetsData = [];
          Object.assign(this.widgetsData, this.dashboardNavPanelData.widgetData);
          // this.widgetsData = this.dashboardNavPanelData.widgetData;
        } else {
          this.widgetsData = this.dashboardNavPanelData.widgetData ? JSON.parse(this.dashboardNavPanelData.widgetData) : [];
        }
        this.gridsterOptions.responsiveOptions[2].lanes = 5;
        this.gridsterDraggableOptions.handlerClass = 'panel-heading-draggable';
        this.generateWidgetsData();
        this.unsliderInit();
      }
    }
    if (changes['resetWidget'] && !changes['resetWidget']['firstChange']) {
      if (typeof this.dashboardNavPanelData.widgetData === 'object') {
        Object.assign(this.widgetsData, this.dashboardNavPanelData.widgetData);
      } else {
        this.widgetsData = JSON.parse(this.dashboardNavPanelData.widgetData);
      }
      // this.widgetsData = typeof this.dashboardNavPanelData.widgetData === 'object' ? this.dashboardNavPanelData.widgetData :
      //   JSON.parse(this.dashboardNavPanelData.widgetData);
      this.reGeneratePosition();
      this.generateWidgetsData();
      this.reinitUnslider(true);
    }
    if (changes['widgetAddData'] && !changes['widgetAddData']['firstChange']) {
      this.widgetsData.push(changes['widgetAddData']['currentValue']);
      this.generateWidgetsData();
      this.reinitUnslider(true);
      this.saveDashboardNavPanel();
    }
    if (changes['saveWidget'] && !changes['saveWidget']['firstChange']) {
      this.saveDashboardNavPanel();
    }
  }

  ngOnInit() {
  }

  saveDashboardNavPanel() {
    this.dashboardNavPanelData.widgetData = this.widgetsData;
    this.dashboardNavPanelService.saveWidget(this.dashboardNavPanelData).subscribe(data => {
      if (data['success']) {
        this.menuItemsDataTmp && window.localStorage.setItem('menuItemsData', JSON.stringify(this.menuItemsDataTmp));
        this.regainSubMenu.emit();
        this._message.create('success', `保存成功！`);
      } else {
        this._message.create('error', `保存失败！`);
      }
    });
  }

  generateWidgetsData() {
    this.widgetsArray = [];
    // todo
    for (let i = 0; i < this.widgetsData.length / 10; i++) {
      this.widgetsArray.push(this.widgetsData.filter((v, index) => (index >= i * 10) && (index < 10 + i * 10)));
    }
  }

  /**
   * 左右滑动初始化
   */
  unsliderInit() {
    $(function () {
      this.slidey = $('.banner').unslider({
        arrows: {
          prev: '<a class="unslider-arrow prev"><img class="arrow" id="al" src="assets/images/dashboard/arrowl.png" alt="prev" width="20" height="35"></a>',
          next: '<a class="unslider-arrow next"><img class="arrow" id="ar" src="assets/images/dashboard/arrowr.png" alt="next" width="20" height="37"></a>'
        },
      });
      this.slideyData = this.slidey.data('unslider');
      this.slideyTotal = this.slideyData.total;
    });
  }

  /**
   * 重新初始化滑动
   * @param {boolean} jumpOrNot
   */
  reinitUnslider(jumpOrNot: boolean) {
    $(function () {
      this.slideyData.calculateSlides();
      if (this.slideyTotal !== this.slideyData.total) {
        $('nav.unslider-nav').remove();
        this.slideyData.initNav();
        this.slideyTotal = this.slideyData.total;
      }
      if (jumpOrNot) {
        while (this.slideyData.current != (this.slideyData.total - 1)) {
          this.slideyData.next();
        }
      }
    });
  }

  /**
   * 删除位置信息，重新排版
   */
  reGeneratePosition() {
    for (let i = 0; i < this.widgetsData.length; i++) {
      delete this.widgetsData[i].xLg;
      delete this.widgetsData[i].xMd;
      delete this.widgetsData[i].xSm;
      delete this.widgetsData[i].xXl;
      delete this.widgetsData[i].yLg;
      delete this.widgetsData[i].yMd;
      delete this.widgetsData[i].ySm;
      delete this.widgetsData[i].yXl;
    }
  }

  optionsChange(options: IGridsterOptions) {
    this.gridsterOptions = options;
    // console.log('options change:', options);
  }

  onReflow(event) {
    // console.log('onReflow', event);
  }

  itemChange($event: any, gridster) {
    // console.log('item change', $event);
  }

  deleteCard($event, index1: number, index2: number, gridster: GridsterComponent) {
    $event.preventDefault();
    // this.widgetsArray[index1].splice(index2, 1);
    const deleteWidget = this.widgetsData[index1 * 10 + index2];
    this.menuItemsDataTmp = JSON.parse(window.localStorage.getItem('menuItemsData'));
    this.menuItemsDataTmp.map(v => v.children.map(e => {
        if (e.appId === deleteWidget.id) {
          e.added = false;
          return e;
        } else {
          return e;
        }
      }
    ));
    this.widgetsData.splice(index1 * 10 + index2, 1);
    this.reGeneratePosition();
    this.generateWidgetsData();
    this.reinitUnslider(false);
    // console.log('widget remove', index1, index2);
  }

  jumpToSource(widget: object) {
    if (!this.cardDragAndDrop) {
      if (widget['url'] !== '') {
        this.router.navigate([widget['router'], widget['url']], {relativeTo: this.route});
      } else {
        this.router.navigate([widget['router']], {relativeTo: this.route});
      }
      // const routerUrl = [];
      // routerUrl.push('layout/left/' + widget['router']);
      // routerUrl.push(widget['url']);
      // this.router.navigate(routerUrl);
      const tmpItem = {};
      tmpItem['appName'] = widget['title'];
      this.selectedMenu.emit(tmpItem);
      this.hideSubMenu.emit();
    }
  }

  /**
   * 主题选择
   */
  showThemeModal() {
    this.themeModalVisible = true;
  }

  cancelChoose() {
    this.bgUrl = this.dashboardNavPanelData.bgUrl;
    this.themeModalVisible = false;
  }

  confirmChoose() {
    this.selectThemeIndex = this.selectThemeIndexTmp;
    this.bgUrl = this.themeImgList[this.selectThemeIndex].url;
    this.dashboardNavPanelData.bgUrl = this.bgUrl;
    this.themeModalVisible = false;
    this.saveDashboardNavPanel();
  }

  chooseBgImg(index) {
    this.themeImgList.forEach((e, i) => i === index ? e.isSelect = true : e.isSelect = false);
    this.bgUrl = this.themeImgList[index].url;
    this.selectThemeIndexTmp = index;
  }

  /**
   * 隐藏左侧菜单
   */
  hideSubMenus() {
    this.hideSubMenu.emit();
  }
}
