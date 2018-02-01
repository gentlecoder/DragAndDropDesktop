import * as Mock from 'mockjs';
import {dashboard_port, left_menu_port} from '../port/index.port';
import ConstantsList from '../app.config';

export class DashboardMock {
  data_list: object = {
    'list|2-6': [{
      'reponame': '@first',
      'name': '@first',
      'tags': '@pick(["service","microservice"])',
      'versions|1-3': [{
        'id|0-100': 20,
        'version': 'latest'
      }]
    }]
  };

  constructor() {
  }

  mock() {
    Mock.mock(left_menu_port.menuItems, {
      'data': ConstantsList.menuItemsData,
      'returnCode': 0,
      'success': true
    });

    Mock.mock(left_menu_port.dashboardNavPanel, {
      'data': ConstantsList.dashboardNavPanelData,
      'returnCode': 0,
      'success': true
    });

    Mock.mock(dashboard_port.saveDashboardNavPanel, {
      data: {},
      'returnCode': 0,
      'success': true
    });
  }
}
