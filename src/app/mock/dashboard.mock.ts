import * as Mock from 'mockjs';
import {dashboard_port, left_menu_port} from '../port/index.port';

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
      'data': [
        {
          'children': [
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'CloudHost',
              'appId': 79,
              'appLogo': '',
              'appName': '云主机',
              'appType': 0,
              'appUrl': '',
              'operCode': 'operation.usp.cloudhost',
              'routerLink': 'cloudhost',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'AppApply',
              'appId': 80,
              'appLogo': '',
              'appName': '云应用申请',
              'appType': 0,
              'appUrl': '',
              'operCode': 'operation.usp.appapply',
              'routerLink': 'app-apply',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'AppLayout',
              'appId': 81,
              'appLogo': '',
              'appName': '云应用编排',
              'appType': 0,
              'appUrl': '',
              'operCode': 'operation.usp.applayout',
              'routerLink': 'application-layout/app',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'DBApply',
              'appId': 82,
              'appLogo': '',
              'appName': '数据库申请',
              'appType': 0,
              'appUrl': '',
              'operCode': 'operation.usp.dbapply',
              'routerLink': 'db-apply',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'DBLayout',
              'appId': 83,
              'appLogo': '',
              'appName': '数据库编排',
              'appType': 0,
              'appUrl': '',
              'operCode': 'operation.usp.dblayout',
              'routerLink': 'application-layout/db',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'Healthyexam',
              'appId': 86,
              'appLogo': '',
              'appName': '体检中心',
              'appType': 0,
              'appUrl': '',
              'operCode': 'operation.usp.healthexam',
              'routerLink': 'exam',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 't',
              'appId': 97,
              'appLogo': 'Chrysanthemum.jpg',
              'appName': 'testtt',
              'appType': 0,
              'appUrl': '',
              'logoFile': {},
              'operCode': 'operation.usp.t',
              'routerLink': 'third',
              'sysDefault': 1
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'sss',
              'appId': 98,
              'appLogo': 'admin.png',
              'appName': 'dyctest',
              'appType': 0,
              'appUrl': 'www.baidu.com',
              'logoFile': {},
              'operCode': 'operation.usp.sss',
              'routerLink': 'third',
              'sysDefault': 1
            }
          ],
          'typeIcon': './assets/images/dashboard/leftmenu-icon/cloud-manage.png',
          'typeId': 0,
          'typeName': '云管理'
        },
        {
          'children': [
            {
              'added': false,
              'appDesc': 'jpb',
              'appEnName': 'jpb',
              'appId': 13,
              'appLogo': './assets/images/dashboard/card-icon/third.png',
              'appName': '第三方-天安容灾工具',
              'appType': 1,
              'appUrl': 'http://10.47.202.98:8101/job-portal/login.html',
              'operCode': 'operation.usp.test002',
              'routerLink': 'third',
              'sysDefault': 1
            },
            {
              'added': false,
              'appDesc': '测试004',
              'appEnName': 'test003',
              'appId': 14,
              'appLogo': '',
              'appName': '第三方-百度',
              'appType': 1,
              'appUrl': 'http://www.baidu.com',
              'operCode': 'operation.usp.test003',
              'routerLink': 'third',
              'sysDefault': 1
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'System',
              'appId': 84,
              'appLogo': '',
              'appName': '系统',
              'appType': 1,
              'appUrl': '',
              'operCode': 'operation.sys',
              'routerLink': 'system',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'Alarm',
              'appId': 85,
              'appLogo': '',
              'appName': '告警',
              'appType': 1,
              'appUrl': '',
              'operCode': 'operation.fm',
              'routerLink': 'alarm',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'SystemApp',
              'appId': 87,
              'appLogo': '',
              'appName': '应用配置',
              'appType': 1,
              'appUrl': '',
              'operCode': 'operation.usp.systemapp',
              'routerLink': 'appconfig',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'MultiCloud',
              'appId': 88,
              'appLogo': '',
              'appName': '多云管理',
              'appType': 1,
              'appUrl': '',
              'operCode': 'operation.usp.multicloud',
              'routerLink': 'cloud-manage',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'QuestionManage',
              'appId': 89,
              'appLogo': '',
              'appName': '题库管理',
              'appType': 1,
              'appUrl': '',
              'operCode': 'operation.usp.question',
              'routerLink': 'question',
              'sysDefault': 0
            },
            {
              'added': false,
              'appDesc': '',
              'appEnName': 'IPArchive',
              'appId': 90,
              'appLogo': '',
              'appName': 'IP档案',
              'appType': 1,
              'appUrl': '',
              'operCode': 'operation.usp.iparchive',
              'routerLink': 'ip-file',
              'sysDefault': 0
            }
          ],
          'typeIcon': './assets/images/dashboard/leftmenu-icon/system.png',
          'typeId': 1,
          'typeName': '系统'
        },
        {
          'children': [],
          'typeIcon': './assets/images/dashboard/leftmenu-icon/big-data.png',
          'typeId': 2,
          'typeName': '大数据'
        }
      ],
      'returnCode': 0,
      'success': true
    });

    Mock.mock(left_menu_port.dashboardNavPanel, {
      'data': {
        'bgUrl': './assets/images/dashboard/bg/bg_001_big.jpg',
        'userName': 'admin',
        'widgetData': '[]'
      },
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
