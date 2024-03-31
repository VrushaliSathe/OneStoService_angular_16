import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicereportComponent } from './servicereport.component';

describe('ServicereportComponent', () => {
  let component: ServicereportComponent;
  let fixture: ComponentFixture<ServicereportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicereportComponent]
    });
    fixture = TestBed.createComponent(ServicereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
