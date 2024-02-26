import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingRateBondComponent } from './floating-rate-bond.component';

describe('FloatingRateBondComponent', () => {
  let component: FloatingRateBondComponent;
  let fixture: ComponentFixture<FloatingRateBondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingRateBondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingRateBondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
