import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickDeliveryDateComponent } from './pick-delivery-date.component';

describe('PickDeliveryDateComponent', () => {
  let component: PickDeliveryDateComponent;
  let fixture: ComponentFixture<PickDeliveryDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickDeliveryDateComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickDeliveryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
