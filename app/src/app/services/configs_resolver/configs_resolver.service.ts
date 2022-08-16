/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { cache } from 'app/sd-services/cache';
import { environment } from 'environments/environment';

@Injectable()
export class configs_resolverService {
    constructor(private _http: HttpClient, private cache: cache) {}
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const res = await this._http.get<{ menu: any[] }>(environment.properties.ssdBaseUrl + '/uiconfig/nav-menu').toPromise();
        this.cache.navMenu = res.menu;
    }
}
