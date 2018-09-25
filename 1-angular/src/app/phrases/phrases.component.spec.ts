import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesComponent } from './phrases.component';

describe('PhrasesComponent', () => {
  let component: PhrasesComponent;
  let fixture: ComponentFixture<PhrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
