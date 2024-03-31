import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DncempreportComponent } from './dncempreport.component';

describe('DncempreportComponent', () => {
  let component: DncempreportComponent;
  let fixture: ComponentFixture<DncempreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DncempreportComponent]
    });
    fixture = TestBed.createComponent(DncempreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
