import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {left_menu_port} from '../../port/index.port';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LeftMenuService {

  constructor(private http: HttpClient) {
  }

  getMenuItems(): Observable<object> {
    return this.http.get(left_menu_port.menuItems);
  }

  getDashboardNavPanel(): Observable<object> {
    return this.http.get(left_menu_port.dashboardNavPanel);
  }

}
