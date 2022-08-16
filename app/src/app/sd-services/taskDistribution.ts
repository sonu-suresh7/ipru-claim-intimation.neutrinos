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
export class taskDistribution {
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

  //   service flows_taskDistribution

  async triggerTD(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getSsdBaseUrl(bh);
      //appendnew_next_triggerTD
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Dx6rmm9ky4peKrlA');
    }
  }

  //appendnew_flow_taskDistribution_start

  async getSsdBaseUrl(bh) {
    try {
      bh.local.ssdUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = await this.buildRequest(bh);
      //appendnew_next_getSsdBaseUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LW5whVOenzN0SwrN');
    }
  }

  async buildRequest(bh) {
    try {
      bh.local.url = `${bh.local.ssdUrl}/task-distribution/trigger`;
      bh.local.body = {};
      bh = await this.makeRequestToTriggerTD(bh);
      //appendnew_next_buildRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WylWxhB21yuDmgq2');
    }
  }

  async makeRequestToTriggerTD(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      this.sd_ZJM4otDkoXCsQnPF(bh);
      //appendnew_next_makeRequestToTriggerTD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G7ZRYizY2ZmedTLj');
    }
  }

  async sd_ZJM4otDkoXCsQnPF(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.res);
      //appendnew_next_sd_ZJM4otDkoXCsQnPF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZJM4otDkoXCsQnPF');
    }
  }

  async sd_sTTnRC81fvn60vED(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.error);
      //appendnew_next_sd_sTTnRC81fvn60vED
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sTTnRC81fvn60vED');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.catchHttpRequest(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async catchHttpRequest(bh) {
    const nodes = ['sd_G7ZRYizY2ZmedTLj'];
    if (nodes.includes(bh.errorSource)) {
      this.sd_sTTnRC81fvn60vED(bh);
      //appendnew_next_catchHttpRequest
      return true;
    }
    return false;
  }
  //appendnew_flow_taskDistribution_Catch
}
