import { TestBed } from '@angular/core/testing';

import { ServiceStateService } from './service-state.service';

describe('ServiceStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceStateService = TestBed.get(ServiceStateService);
    expect(service).toBeTruthy();
  });
});
