// ref: https://blog.angularindepth.com/the-new-angular-httpclient-api-9e5c85fe3361

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ServiceStateService } from '../service-state/service-state.service'

// TODO: support url-map if needed. That is, multiple calls to same endpoint
//import oUrlMap from 'assets/url-map';
const oUrlMap = {};

@Injectable()
export class ServiceUrlManagerService {

    constructor(private http: HttpClient, private mState: ServiceStateService) { }

    // fGet returns an observable
    // TODO: rename bc there's already fobsGet; follow REST pattern (fobsRequest, fobsPost, etc)
    // TODO: oRequestOptions.sCredentials
    // TODO: oRequestOptions.bBustUrlFromCache
    // TODO: oRequestOptions.params
    // TODO: generic error catch which logs error, as long as vUrlKey !== 'log-error' (that would loop forever)
    // TODO: what about POST? refer to rrm
    fGet(vUrlKey, oOptions): Observable<any> {
        const oRequestOptions = oOptions && oOptions.oRequestOptions || {};
        const oHttpConfig = { // ref: https://angular.io/api/common/http/HttpClient#members
            body: null as any,
            headers: null as any,
            observe: (oRequestOptions.bAsRawResponse ? 'response' : null) as any,
            params: (oRequestOptions.params || null) as any,
            reportProgress: null as boolean,
            responseType: (oRequestOptions.responseType || 'json') as any,
            withCredentials: null as boolean
        };
        let obsRequest;
        let vUrl;

        //if (window.location.href.slice(-9) === 'mock=true') {
        if (true) { // TODO: for prototyping only. this should be removed and above line uncommented
            vUrl = _fMock();
        } else {
            vUrl = oUrlMap[vUrlKey] ? oUrlMap[vUrlKey] : vUrlKey;
        }

        if (!vUrl) {
            return undefined;
        } else if (typeof vUrl === 'string') {
            vUrl = this.fsSupplant(vUrl, oOptions);
        } else if (vUrl instanceof Object) { // it's a function not a url string
            return vUrl(oOptions, this.mState.State);
        }

        if (oRequestOptions.sCredentials) {
            oHttpConfig.headers = {};
            oHttpConfig.headers.authorization = 'Basic ' + oRequestOptions.sCredentials.replace(/["\\]/g, '');
            oHttpConfig.withCredentials = true;
        }

        try {
            if (oOptions.oPostData) {
                obsRequest = this.http.post(vUrl, oOptions.oPostData, oHttpConfig);
            } else {
                obsRequest = this.http.get(vUrl, oHttpConfig);
            }

            // TODO: if you want promises then make a different method. that way we can type this method.
            // return oRequestOptions.bAsPromise ? obsRequest.toPromise() : obsRequest;
            return obsRequest;
        } catch (e) {
            /* TODO: pseudocode:
            if () {
                fGget('log-error', {
                    'sErrorMessage': 'Get exception',
                    'soException': e.message
                });
            }
            */
            /* TODO: pseudocode: different for Promise vs Value vs observable, etc? idk...
            .then(function (response) {
                resolve(response.data);
            }, function (reason) {
                var oError = {
                    error: 'NA'
                };

                if (reason.data) {
                    $.extend(oError, reason, oError);
                }

                resolve(oError);
            })
            */
        }

        function _fMock() {
            return 'assets/mock-data/' + vUrlKey + '.json';
        }
    }

    //  interpolate an object like fsSupplant('this/{is-an}/example', {'is-an': 'apple-tastes-delicious-for'});
    //  ref: https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
    //  ref: require('ella-utils').fsSupplant
    fsSupplant(sInterpolee, oOptions): string {
        return sInterpolee.replace(/{([^{}]*)}/g,
            function (a, b) {
                const r = oOptions[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    }

    // get as observable
    // TODO: can we type array of this.mState.State.oUrlCache[sUrlKey] ?
    fobsGet(sUrlKey, oOptions?): Observable<any> {
        oOptions = oOptions || {};

        if (this.mState.State.oUrlCache[sUrlKey]) {
            return of(this.mState.State.oUrlCache[sUrlKey]);
        }

        return this.fGet(sUrlKey, oOptions).pipe(map(vResponse => {
            if (!vResponse.error && !vResponse.errorMsg) {
                this.mState.State.oUrlCache[sUrlKey] = vResponse;
            }

            return vResponse;
        }));
    }

}
