import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTypeDashboaredComponent } from './web-type-dashboard.component';

describe('WebTypeDashboaredComponent', () => {
  let component: WebTypeDashboaredComponent;
  let fixture: ComponentFixture<WebTypeDashboaredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebTypeDashboaredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTypeDashboaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
