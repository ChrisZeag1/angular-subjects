import { TestBed, inject } from '@angular/core/testing';

import { RunEngineService } from './run-engine.service';

describe('RunEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunEngineService]
    });
  });

  it('should be created', inject([RunEngineService], (service: RunEngineService) => {
    expect(service).toBeTruthy();
  }));
});
