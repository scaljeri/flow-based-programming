import { TestBed } from '@angular/core/testing';

import { FbpService } from './fbp.service';

describe('FbpService', () => {
  let service: FbpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
