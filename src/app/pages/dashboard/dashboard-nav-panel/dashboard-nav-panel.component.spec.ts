import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavPanelComponent } from './dashboard-nav-panel.component';

describe('DashboardNavPanelComponent', () => {
  let component: DashboardNavPanelComponent;
  let fixture: ComponentFixture<DashboardNavPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNavPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
