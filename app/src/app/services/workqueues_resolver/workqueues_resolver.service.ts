/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { cache } from 'app/sd-services/cache';
import { environment } from 'environments/environment';

@Injectable()
export class workqueues_resolverService {
    constructor(private _http: HttpClient, private cache: cache) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._http.get(environment.properties.ssdBaseUrl + '/wq/getqueues');
    }
}
