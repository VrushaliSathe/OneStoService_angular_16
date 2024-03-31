import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetServiceComponent } from './wet-service.component';

describe('WetServiceComponent', () => {
  let component: WetServiceComponent;
  let fixture: ComponentFixture<WetServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WetServiceComponent]
    });
    fixture = TestBed.createComponent(WetServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
