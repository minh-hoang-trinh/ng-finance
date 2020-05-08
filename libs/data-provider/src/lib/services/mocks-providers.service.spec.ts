import { TestBed } from '@angular/core/testing';

import { MocksProvidersService } from './mocks-providers.service';

describe('MocksProvidersService', () => {
  let service: MocksProvidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocksProvidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
