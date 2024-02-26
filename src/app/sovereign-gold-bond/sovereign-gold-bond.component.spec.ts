import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovereignGoldBondComponent } from './sovereign-gold-bond.component';

describe('SovereignGoldBondComponent', () => {
  let component: SovereignGoldBondComponent;
  let fixture: ComponentFixture<SovereignGoldBondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SovereignGoldBondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SovereignGoldBondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
