/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { loaderService } from '../loader/loader.service';

@Injectable()
export class loader_interceptorService implements HttpInterceptor {

    constructor(public _loaderService: loaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loaderService.show();
        return next.handle(req).pipe(
            finalize(() => this._loaderService.hide())
        );
    }
}
