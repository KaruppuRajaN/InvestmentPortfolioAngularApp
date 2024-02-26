import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnmutualfundsComponent } from './ownmutualfunds.component';

describe('OwnmutualfundsComponent', () => {
  let component: OwnmutualfundsComponent;
  let fixture: ComponentFixture<OwnmutualfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnmutualfundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnmutualfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
