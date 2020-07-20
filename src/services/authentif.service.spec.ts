import { TestBed } from '@angular/core/testing';

import { AuthentifService } from './authentif.service';

describe('AuthentifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentifService = TestBed.get(AuthentifService);
    expect(service).toBeTruthy();
  });
});
