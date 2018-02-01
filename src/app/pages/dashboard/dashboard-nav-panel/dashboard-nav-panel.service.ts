import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {dashboard_port} from '../../../port/index.port';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardNavPanelService {

  constructor(private http: HttpClient) {
  }

  saveWidget(body): Observable<object> {
    // 保存的时候把数据存到缓存里面 做成与后台交互的效果
    window.localStorage.setItem('dashboardNavPanelData', JSON.stringify(body));
    return this.http.post(dashboard_port.saveDashboardNavPanel, body);
  }
}
