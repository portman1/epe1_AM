import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CienPage } from './cien.page';

describe('CienPage', () => {
  let component: CienPage;
  let fixture: ComponentFixture<CienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
