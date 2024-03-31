import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicevedioComponent } from './servicevedio.component';

describe('ServicevedioComponent', () => {
  let component: ServicevedioComponent;
  let fixture: ComponentFixture<ServicevedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicevedioComponent]
    });
    fixture = TestBed.createComponent(ServicevedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
