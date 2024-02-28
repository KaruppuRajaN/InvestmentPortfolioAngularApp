import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualprocessComponent } from './mutualprocess.component';

describe('MutualprocessComponent', () => {
  let component: MutualprocessComponent;
  let fixture: ComponentFixture<MutualprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MutualprocessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MutualprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
