import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecomplaintComponent } from './servicecomplaint.component';

describe('ServicecomplaintComponent', () => {
  let component: ServicecomplaintComponent;
  let fixture: ComponentFixture<ServicecomplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicecomplaintComponent]
    });
    fixture = TestBed.createComponent(ServicecomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
