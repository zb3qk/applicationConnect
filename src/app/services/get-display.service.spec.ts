import { TestBed } from '@angular/core/testing';

import { GetDisplayService } from './get-display.service';

describe('GetDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDisplayService = TestBed.get(GetDisplayService);
    expect(service).toBeTruthy();
  });
});
