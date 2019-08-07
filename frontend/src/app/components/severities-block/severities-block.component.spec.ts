import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeveritiesBlockComponent } from './severities-block.component';

describe('SeveritiesBlockComponent', () => {
  let component: SeveritiesBlockComponent;
  let fixture: ComponentFixture<SeveritiesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeveritiesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeveritiesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
