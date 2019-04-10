import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalculoPage } from './scalculo.page';

describe('ScalculoPage', () => {
  let component: ScalculoPage;
  let fixture: ComponentFixture<ScalculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalculoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
