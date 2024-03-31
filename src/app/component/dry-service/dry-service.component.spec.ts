import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryServiceComponent } from './dry-service.component';

describe('DryServiceComponent', () => {
  let component: DryServiceComponent;
  let fixture: ComponentFixture<DryServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DryServiceComponent]
    });
    fixture = TestBed.createComponent(DryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
