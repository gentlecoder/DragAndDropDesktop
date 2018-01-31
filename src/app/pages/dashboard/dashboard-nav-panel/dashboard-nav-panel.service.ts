import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {dashboard_port} from '../../../port/index.port';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DashboardNavPanelService {

  constructor(private http: HttpClient) {
  }

  saveWidget(body): Observable<object> {
    return this.http.post(dashboard_port.saveDashboardNavPanel, body);
  }
}
