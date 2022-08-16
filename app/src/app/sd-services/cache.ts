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
export class cache {
  public userInfo: any;
  public navMenu: any;
  public checkedOut: any;
  public resourceLinks: any;
  public loggedInRole: any;
  public appSettings: any;
  public languages: any;
  public columns: any;

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

  //   service flows_cache

  async sd_mbPCYs6btwWO1TFX(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.setVars(bh);
      //appendnew_next_sd_mbPCYs6btwWO1TFX
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mbPCYs6btwWO1TFX');
    }
  }

  async getCheckedOut(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          checkedOut: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_97RYgyIS4hiZH5rU(bh);
      //appendnew_next_getCheckedOut
      return (
        // formatting output variables
        {
          input: {},
          local: {
            checkedOut: bh.local.checkedOut,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IBkHmsTw4ydnPL6L');
    }
  }

  //appendnew_flow_cache_start

  async setVars(bh) {
    try {
      this.userInfo = {};
      this.navMenu = [];
      this.checkedOut = { task: null, case: null };
      this.resourceLinks = bh;
      this.loggedInRole = bh;
      this.appSettings = bh;
      this.languages = [];
      this.columns = {};
      //appendnew_next_setVars
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GgTl4K76J2N7XUD6');
    }
  }

  async sd_97RYgyIS4hiZH5rU(bh) {
    try {
      bh.local.checkedOut = this.checkedOut;
      //appendnew_next_sd_97RYgyIS4hiZH5rU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_97RYgyIS4hiZH5rU');
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
  //appendnew_flow_cache_Catch
}
