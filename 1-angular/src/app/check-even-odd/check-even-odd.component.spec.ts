import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEvenOddComponent } from './check-even-odd.component';

describe('CheckEvenOddComponent', () => {
  let component: CheckEvenOddComponent;
  let fixture: ComponentFixture<CheckEvenOddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckEvenOddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEvenOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
