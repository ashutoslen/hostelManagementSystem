import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardCounters } from './DashboardCounters';

describe('DashboardCounters', () => {
  let component: DashboardCounters;
  let fixture: ComponentFixture<DashboardCounters>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCounters ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCounters);
    component = fixture.componentInstance;
    component.servoyApi =  jasmine.createSpyObj('ServoyApi', ['getMarkupId','trustAsHtml','registerComponent','unRegisterComponent']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  "model":
	{
				
		
	}
});
