import { TestBed } from '@angular/core/testing';

import { LibWithAssetsService } from './lib-with-assets.service';

describe('LibWithAssetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibWithAssetsService = TestBed.get(LibWithAssetsService);
    expect(service).toBeTruthy();
  });
});
