import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccalculo2Page } from './ccalculo2.page';

describe('Ccalculo2Page', () => {
  let component: Ccalculo2Page;
  let fixture: ComponentFixture<Ccalculo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ccalculo2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ccalculo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
