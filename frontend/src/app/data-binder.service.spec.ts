import { TestBed } from '@angular/core/testing';

import { DataBinderService } from './data-binder.service';

describe('DataBinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBinderService = TestBed.get(DataBinderService);
    expect(service).toBeTruthy();
  });
});
