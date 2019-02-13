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
  UrlManager;
  Utils;

  constructor(mState: ServiceStateService, mUrlManager: ServiceUrlManagerService) {
    this.State = mState;
  }

  fGet(vUrlKey, oOptions): any {
    return mUrlManager.fGet(vUrlKey, oOptions)
  }

}
