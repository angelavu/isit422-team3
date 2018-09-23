import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletextComponent } from './simpletext.component';

describe('SimpletextComponent', () => {
  let component: SimpletextComponent;
  let fixture: ComponentFixture<SimpletextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpletextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpletextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
