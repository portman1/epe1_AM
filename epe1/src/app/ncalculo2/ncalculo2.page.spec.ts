import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ncalculo2Page } from './ncalculo2.page';

describe('Ncalculo2Page', () => {
  let component: Ncalculo2Page;
  let fixture: ComponentFixture<Ncalculo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ncalculo2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ncalculo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
