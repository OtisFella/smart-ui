import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOtpPage } from './input-otp.page';

describe('InputOtpPage', () => {
  let component: InputOtpPage;
  let fixture: ComponentFixture<InputOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOtpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
