import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportserviceComponent } from './reportservice.component';

describe('ReportserviceComponent', () => {
  let component: ReportserviceComponent;
  let fixture: ComponentFixture<ReportserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportserviceComponent]
    });
    fixture = TestBed.createComponent(ReportserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
