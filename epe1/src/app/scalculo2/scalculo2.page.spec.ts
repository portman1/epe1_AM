import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scalculo2Page } from './scalculo2.page';

describe('Scalculo2Page', () => {
  let component: Scalculo2Page;
  let fixture: ComponentFixture<Scalculo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scalculo2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scalculo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
