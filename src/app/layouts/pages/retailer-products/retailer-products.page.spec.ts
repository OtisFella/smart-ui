import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerProductsPage } from './retailer-products.page';

describe('RetailerProductsPage', () => {
  let component: RetailerProductsPage;
  let fixture: ComponentFixture<RetailerProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
