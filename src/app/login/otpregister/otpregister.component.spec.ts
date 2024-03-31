import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpregisterComponent } from './otpregister.component';

describe('OtpregisterComponent', () => {
  let component: OtpregisterComponent;
  let fixture: ComponentFixture<OtpregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpregisterComponent]
    });
    fixture = TestBed.createComponent(OtpregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
