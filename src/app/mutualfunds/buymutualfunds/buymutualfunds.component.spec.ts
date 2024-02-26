import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuymutualfundsComponent } from './buymutualfunds.component';

describe('BuymutualfundsComponent', () => {
  let component: BuymutualfundsComponent;
  let fixture: ComponentFixture<BuymutualfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuymutualfundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuymutualfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
