import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskMeterComponent } from './risk-meter.component';

describe('RiskMeterComponent', () => {
  let component: RiskMeterComponent;
  let fixture: ComponentFixture<RiskMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
