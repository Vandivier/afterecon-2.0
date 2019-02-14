import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceStateService {
  State;

  constructor() {
    this.State = {}
    this.State.oUrlCache = {};
  }

  // TODO: _fInitStateObservers
}
