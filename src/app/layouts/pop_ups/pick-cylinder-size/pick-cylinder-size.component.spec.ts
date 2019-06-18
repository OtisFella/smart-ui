import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCylinderSizeComponent } from './pick-cylinder-size.component';

describe('PickCylinderSizeComponent', () => {
  let component: PickCylinderSizeComponent;
  let fixture: ComponentFixture<PickCylinderSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickCylinderSizeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCylinderSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
