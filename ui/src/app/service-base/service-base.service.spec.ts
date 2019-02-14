import { TestBed, inject } from '@angular/core/testing';

import { ServiceBaseService } from './service-base.service';
import { ServiceStateService } from 'src/app/service-state/service-state.service';
import { ServiceUrlManagerService } from 'src/app/service-url-manager/service-url-manager.service';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';

describe('ServiceBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ServiceBaseService, ServiceStateService, ServiceUrlManagerService],
    });
  });

  it('should be created', inject([ServiceBaseService], (service: ServiceBaseService) => {
    expect(service).toBeTruthy();
  }));
});
