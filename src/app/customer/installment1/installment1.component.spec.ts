import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Installment1Component } from './installment1.component';

describe('Installment1Component', () => {
  let component: Installment1Component;
  let fixture: ComponentFixture<Installment1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Installment1Component]
    });
    fixture = TestBed.createComponent(Installment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
