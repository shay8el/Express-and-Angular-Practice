import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTypesBlockComponent } from './web-types-block.component';

describe('WebTypesBlockComponent', () => {
  let component: WebTypesBlockComponent;
  let fixture: ComponentFixture<WebTypesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebTypesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTypesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
