import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesBlockComponent } from './sources-block.component';

describe('SourcesBlockComponent', () => {
  let component: SourcesBlockComponent;
  let fixture: ComponentFixture<SourcesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
