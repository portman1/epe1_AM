import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcalculoPage } from './ncalculo.page';

describe('NcalculoPage', () => {
  let component: NcalculoPage;
  let fixture: ComponentFixture<NcalculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcalculoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcalculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
