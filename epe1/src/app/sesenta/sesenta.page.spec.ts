import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesentaPage } from './sesenta.page';

describe('SesentaPage', () => {
  let component: SesentaPage;
  let fixture: ComponentFixture<SesentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
