import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadosPage } from './acercados.page';

describe('AcercadosPage', () => {
  let component: AcercadosPage;
  let fixture: ComponentFixture<AcercadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
