import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositComponent } from './recurring-deposit.component';

describe('RecurringDepositComponent', () => {
  let component: RecurringDepositComponent;
  let fixture: ComponentFixture<RecurringDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecurringDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecurringDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
