/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { emailService } from 'app/sd-services/emailService';

@Injectable()
export class email_template_resolverService implements Resolve<any> {
    constructor(private _emailService: emailService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._emailService.emailTemplate().then(res => {
            if (res && res.local && res.local.templates) {
                return res.local.templates;
            }
        });
    }
}
