import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcalculoPage } from './ccalculo.page';

describe('CcalculoPage', () => {
  let component: CcalculoPage;
  let fixture: ComponentFixture<CcalculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcalculoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcalculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
