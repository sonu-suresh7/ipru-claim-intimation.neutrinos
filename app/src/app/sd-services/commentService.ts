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
export class commentService {
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

  //   service flows_commentService

  async getAllComments(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getCheckedOutDetails(bh);
      //appendnew_next_getAllComments
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
      return await this.errorHandler(bh, e, 'sd_tUg6y9COrGqWsApu');
    }
  }

  async insertComment(comment: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          comment: comment,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getCheckedOutDetails2(bh);
      //appendnew_next_insertComment
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QvdnbsWcF12erQkg');
    }
  }

  //appendnew_flow_commentService_start

  async getCheckedOutDetails(bh) {
    try {
      let outputVariables = await this.sd_RbD2RZwzan9VSOEL.getCheckedOut();
      bh.checkedOut = outputVariables.local.checkedOut;

      bh = await this.sd_15lad68f21jrYVNx(bh);
      //appendnew_next_getCheckedOutDetails
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uUPlW0zRDTSxnYlU');
    }
  }

  async sd_15lad68f21jrYVNx(bh) {
    try {
      console.log('bh.checkedOut', bh.checkedOut);

      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/${bh.checkedOut.case._id}/comments`;
      bh = await this.sd_dcWsdweEVw0DMcps(bh);
      //appendnew_next_sd_15lad68f21jrYVNx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_15lad68f21jrYVNx');
    }
  }

  async sd_dcWsdweEVw0DMcps(bh) {
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
      //appendnew_next_sd_dcWsdweEVw0DMcps
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dcWsdweEVw0DMcps');
    }
  }

  async getCheckedOutDetails2(bh) {
    try {
      let outputVariables = await this.sd_RbD2RZwzan9VSOEL.getCheckedOut();
      bh.checkedOut = outputVariables.local.checkedOut;

      bh = await this.sd_7iEvQdInauP5RJJm(bh);
      //appendnew_next_getCheckedOutDetails2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d31oJe1JvYk5Qugb');
    }
  }

  async sd_7iEvQdInauP5RJJm(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/${bh.checkedOut.case._id}/comments`;

      bh.body = {
        comment: bh.input.comment,
        user: bh.system.currentUser.username,
      };

      bh = await this.sd_wHqEU3SICrfP4gt7(bh);
      //appendnew_next_sd_7iEvQdInauP5RJJm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7iEvQdInauP5RJJm');
    }
  }

  async sd_wHqEU3SICrfP4gt7(bh) {
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
      //appendnew_next_sd_wHqEU3SICrfP4gt7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wHqEU3SICrfP4gt7');
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
  //appendnew_flow_commentService_Catch
}
