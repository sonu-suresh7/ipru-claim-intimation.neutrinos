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
import * as sd_RbD2RZwzan9VSOEL from './cache'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class trafficLightService {
  constructor(
    private sd_RbD2RZwzan9VSOEL: sd_RbD2RZwzan9VSOEL.cache,
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

  //   service flows_trafficLightService

  async getAllLights(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getCheckedOutDetails(bh);
      //appendnew_next_getAllLights
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kYwVzvYgNAD8KeuN');
    }
  }

  async updateLight(
    traffic_light_id: any = undefined,
    status: any = undefined,
    name: any = undefined,
    case_id: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          traffic_light_id: traffic_light_id,
          status: status,
          name: name,
          case_id: case_id,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getCheckedOutDetails1(bh);
      //appendnew_next_updateLight
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2SAasfOvKxMs8JC9');
    }
  }

  async insertLight(name: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          name: name,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getCheckedOutDetails2(bh);
      //appendnew_next_insertLight
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MA2lTHytl91B1fXj');
    }
  }

  async getAllLightsStats(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getCheckedOutDetails3(bh);
      //appendnew_next_getAllLightsStats
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7XIoJExO7MLjGf3P');
    }
  }

  //appendnew_flow_trafficLightService_start

  async getCheckedOutDetails(bh) {
    try {
      let outputVariables = await this.sd_RbD2RZwzan9VSOEL.getCheckedOut();
      bh.checkedOut = outputVariables.local.checkedOut;

      bh = await this.sd_FMDxBg2OzCBySinr(bh);
      //appendnew_next_getCheckedOutDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oqlHAGJDGcHH5WoP');
    }
  }

  async sd_FMDxBg2OzCBySinr(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/${bh.checkedOut.case._id}/traffic-light`;
      bh = await this.sd_oSNAF8UmB6rB2FXp(bh);
      //appendnew_next_sd_FMDxBg2OzCBySinr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FMDxBg2OzCBySinr');
    }
  }

  async sd_oSNAF8UmB6rB2FXp(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_oSNAF8UmB6rB2FXp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oSNAF8UmB6rB2FXp');
    }
  }

  async getCheckedOutDetails1(bh) {
    try {
      let outputVariables = await this.sd_RbD2RZwzan9VSOEL.getCheckedOut();
      bh.checkedOut = outputVariables.local.checkedOut;

      bh = await this.sd_4b2UANHnsGeNWuzM(bh);
      //appendnew_next_getCheckedOutDetails1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rA2zVJvX2wm4jqBB');
    }
  }

  async sd_4b2UANHnsGeNWuzM(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/${bh.checkedOut.case._id}/traffic-light/${bh.input.traffic_light_id}`;

      bh.body = {
        name: bh.input.name,
        status: bh.input.status,
      };
      bh = await this.sd_dkXaYmivOn9bvcJS(bh);
      //appendnew_next_sd_4b2UANHnsGeNWuzM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4b2UANHnsGeNWuzM');
    }
  }

  async sd_dkXaYmivOn9bvcJS(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'patch',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_dkXaYmivOn9bvcJS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dkXaYmivOn9bvcJS');
    }
  }

  async getCheckedOutDetails2(bh) {
    try {
      let outputVariables = await this.sd_RbD2RZwzan9VSOEL.getCheckedOut();
      bh.checkedOut = outputVariables.local.checkedOut;

      bh = await this.sd_3dtLQbjlESuIax0m(bh);
      //appendnew_next_getCheckedOutDetails2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lCuaF2iewxa7p4xn');
    }
  }

  async sd_3dtLQbjlESuIax0m(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/${bh.checkedOut.case._id}/traffic-light`;
      console.log(bh);
      bh.body = {
        name: bh.input.name,
        status: 'incomplete',
      };
      bh = await this.sd_pN0xRuKzEl242cZb(bh);
      //appendnew_next_sd_3dtLQbjlESuIax0m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3dtLQbjlESuIax0m');
    }
  }

  async sd_pN0xRuKzEl242cZb(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_pN0xRuKzEl242cZb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pN0xRuKzEl242cZb');
    }
  }

  async getCheckedOutDetails3(bh) {
    try {
      let outputVariables = await this.sd_RbD2RZwzan9VSOEL.getCheckedOut();
      bh.checkedOut = outputVariables.local.checkedOut;

      bh = await this.sd_IEU6oQvqbqrhss7S(bh);
      //appendnew_next_getCheckedOutDetails3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b6POYz5nqJasrbnB');
    }
  }

  async sd_IEU6oQvqbqrhss7S(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/${bh.checkedOut.case._id}/traffic-light/stats`;

      console.log('making call for stats');
      console.log(bh.url);
      bh = await this.sd_Iije3NYs1lcwimDN(bh);
      //appendnew_next_sd_IEU6oQvqbqrhss7S
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IEU6oQvqbqrhss7S');
    }
  }

  async sd_Iije3NYs1lcwimDN(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_Iije3NYs1lcwimDN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Iije3NYs1lcwimDN');
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
  //appendnew_flow_trafficLightService_Catch
}
