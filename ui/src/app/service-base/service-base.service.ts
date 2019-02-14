/**
 *  file name: service-base-service.ts
 *  aliases: B, Base Service
 *
 *  description:
 *      wraps a number of commonly used services into one injectable base service.
 **/

import { Injectable } from '@angular/core';

import { ServiceStateService } from '../service-state/service-state.service';
import { ServiceUrlManagerService } from '../service-url-manager/service-url-manager.service';
import { Observable, Subject } from '../../../node_modules/rxjs';

@Injectable()
export class ServiceBaseService {

  State;
  mUrlManager;
  obsState: Observable<any>;
  subjectState: Subject<any>;

  constructor(_mState: ServiceStateService, _mUrlManager: ServiceUrlManagerService) {
    this.mUrlManager = _mUrlManager;
    this.State = _mState.State;

    this.subjectState = new Subject<any>();
    this.obsState = this.subjectState.asObservable();
  }

  // TODO: oStateEvent should at least have sEventType, then optional data
  fEmitStateEvent(oOptions: any) {
    return this.subjectState.next(oOptions);
  }

  fGet(vUrlKey, oOptions?): any {
    return this.mUrlManager.fGet(vUrlKey, oOptions || {});
  }

  fobsGet(sUrlKey, oOptions?): Observable<any> {
    return this.mUrlManager.fobsGet(sUrlKey, oOptions || {});
  }

}
