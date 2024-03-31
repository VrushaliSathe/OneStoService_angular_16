import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceimageComponent } from './serviceimage.component';

describe('ServiceimageComponent', () => {
  let component: ServiceimageComponent;
  let fixture: ComponentFixture<ServiceimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceimageComponent]
    });
    fixture = TestBed.createComponent(ServiceimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
