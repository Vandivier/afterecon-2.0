import { TestBed, inject } from '@angular/core/testing';

import { ServiceUrlManagerService } from './service-url-manager.service';
import { ServiceStateService } from 'src/app/service-state/service-state.service';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';

describe('ServiceUrlManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ServiceStateService, ServiceUrlManagerService],
    });
  });

  it('should be created', inject([ServiceUrlManagerService], (service: ServiceUrlManagerService) => {
    expect(service).toBeTruthy();
  }));
});
