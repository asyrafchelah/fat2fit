import { TestBed } from '@angular/core/testing';

import { Fat2FitService } from './fat2-fit.service';

describe('Fat2FitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Fat2FitService = TestBed.get(Fat2FitService);
    expect(service).toBeTruthy();
  });
});
