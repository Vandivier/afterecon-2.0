/**
 *  file name: service-base-service.ts
 *  aliases: B, Base Service
 *
 *  description:
 *      wraps a number of commonly used services into one injectable base service.
 **/

import { Injectable } from '@angular/core';

import { ServiceStateService } from '../service-state/service-state.service'
import { ServiceUrlManagerService } from '../service-url-manager/service-url-manager.service'

@Injectable()
export class ServiceBaseService {

  State;
  mUrlManager;

  constructor(_mState: ServiceStateService, _mUrlManager: ServiceUrlManagerService) {
    this.mUrlManager = _mUrlManager;
    this.State = _mState.State;
  }

  fGet(vUrlKey, oOptions): any {
    return this.mUrlManager.fGet(vUrlKey, oOptions)
  }

}
