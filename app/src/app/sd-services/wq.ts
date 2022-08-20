/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class wq {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_wq

  async getWqs(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          res: {},
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_GFi0HjXcmbmgbf6x(bh);
      //appendnew_next_getWqs
      return (
        // formatting output variables
        {
          input: {},
          local: {
            res: bh.local.res,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e96J3FPrqUdxXJzr');
    }
  }

  async getQTasks(wqConf: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          wqConf: wqConf,
        },
        local: {
          reponsePayload: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.buildRequest(bh);
      //appendnew_next_getQTasks
      return (
        // formatting output variables
        {
          input: {},
          local: {
            reponsePayload: bh.local.reponsePayload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Mwmnxvd5AMvCxFbP');
    }
  }

  async getDefaultQTasks(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          reponsePayload: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.buildGetDefaultQTasksRequest(bh);
      //appendnew_next_getDefaultQTasks
      return (
        // formatting output variables
        {
          input: {},
          local: {
            reponsePayload: bh.local.reponsePayload,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uEyiJd3WGLanVvYX');
    }
  }

  //appendnew_flow_wq_start

  async sd_GFi0HjXcmbmgbf6x(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdBaseUrl + '/wq/getqueues';
      bh = await this.sd_iw9uvrt6PKgVzU3w(bh);
      //appendnew_next_sd_GFi0HjXcmbmgbf6x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GFi0HjXcmbmgbf6x');
    }
  }

  async sd_iw9uvrt6PKgVzU3w(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_iw9uvrt6PKgVzU3w
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iw9uvrt6PKgVzU3w');
    }
  }

  async buildRequest(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdBaseUrl + '/wq/gettasks';
      bh.local.body = bh.input.wqConf;
      bh = await this.sd_BYQXaoasfSDdfq7S(bh);
      //appendnew_next_buildRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_woPh0UmDtU9gza3s');
    }
  }

  async sd_BYQXaoasfSDdfq7S(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: { 'hide-spinner': 'true' },
        params: {},
        body: bh.local.body,
      };
      bh.local.reponsePayload = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_BYQXaoasfSDdfq7S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BYQXaoasfSDdfq7S');
    }
  }

  async buildGetDefaultQTasksRequest(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdBaseUrl + '/wq/default/gettasks';

      bh = await this.sd_2Oa5Kl4VG9hLSbue(bh);
      //appendnew_next_buildGetDefaultQTasksRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KxVQFYilzSnyRogk');
    }
  }

  async sd_2Oa5Kl4VG9hLSbue(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.reponsePayload = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_2Oa5Kl4VG9hLSbue
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2Oa5Kl4VG9hLSbue');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_wq_Catch
}
