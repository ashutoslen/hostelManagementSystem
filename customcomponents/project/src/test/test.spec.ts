import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Test } from './test';

describe('Test', () => {
  let component: Test;
  let fixture: ComponentFixture<Test>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Test ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test);
    component = fixture.componentInstance;
    component.servoyApi =  jasmine.createSpyObj('ServoyApi', ['getMarkupId','trustAsHtml','registerComponent','unRegisterComponent']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
