import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterOtpComponent } from './enter-otp.component';

describe('EnterOtpComponent', () => {
  let component: EnterOtpComponent;
  let fixture: ComponentFixture<EnterOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterOtpComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
