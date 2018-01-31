import ConstantList from '../app.config';

export const dashboard_port = {
  host_detail: ConstantList.devUrl + 'overview/host/',
  app_detail: ConstantList.devUrl + 'overview/app/',
  db_detail: ConstantList.devUrl + 'overview/db/',
  health_detail: ConstantList.devUrl + 'overview/health/',
  listVms: ConstantList.devUrl + 'overview/vms/',
  listMonitor: ConstantList.devUrl + 'overview/monitor/',
  addMonitor: ConstantList.devUrl + 'overview/add/',
  deleteMonitor: ConstantList.devUrl + 'overview/delete/',
  saveDashboardNavPanel: ConstantList.devUrl + 'systemapp/desktop/',
  liuzhou_dashboard_environment: ConstantList.devUrl + 'clouddashboard/environment/',
  liuzhou_dashboard_statistics: ConstantList.devUrl + 'clouddashboard/statistics/',
  liuzhou_dashboard_marks: ConstantList.devUrl + 'clouddashboard/marks/',
  list: ConstantList.devUrl + 'layout/dashboard/list',
  get: ConstantList.devUrl + 'layout/dashboard/get',
  post: ConstantList.devUrl + 'layout/dashboard/post',
  delete: ConstantList.devUrl + 'layout/dashboard/delete',
};
