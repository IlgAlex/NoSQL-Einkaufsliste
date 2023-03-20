import { TestBed } from '@angular/core/testing';

import { ChangesApiService } from './changes-api.service';

describe('ChangesApiService', () => {
  let service: ChangesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
