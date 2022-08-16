/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-reassign',
  templateUrl: './reassign.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class reassignComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_HX3StKM3z0rTFu6z(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_HX3StKM3z0rTFu6z(bh) {
    try {
      bh = this.sd_a7HbimdPiCuqflbv(bh);
      //appendnew_next_sd_HX3StKM3z0rTFu6z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HX3StKM3z0rTFu6z');
    }
  }

  getUWUsers(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_D2IQEPnEllettPhu(bh);
      //appendnew_next_getUWUsers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cWcnhK4eahzqeZ1t');
    }
  }

  acFilter(v: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { v: v };
      bh.local = {};
      bh = this.filter(bh);
      //appendnew_next_acFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w1NnsJjcjstTJGh5');
    }
  }

  selectUser(e: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { e: e };
      bh.local = {};
      bh = this.assignToSelectedUser(bh);
      //appendnew_next_selectUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nkKIv0WNhCNRNfqw');
    }
  }

  //appendnew_flow_reassignComponent_start

  sd_a7HbimdPiCuqflbv(bh) {
    try {
      this.page.fds = [];
      bh = this.getUserRole(bh);
      //appendnew_next_sd_a7HbimdPiCuqflbv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a7HbimdPiCuqflbv');
    }
  }

  getUserRole(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.USER_ROLE = cacheInstance['loggedInRole'];
      bh = this.sd_oXTTBcW5S6dTvDZr(bh);
      //appendnew_next_getUserRole
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTU3AinhTV5F7MKq');
    }
  }

  sd_oXTTBcW5S6dTvDZr(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.USER_ROLE,
          'ADMIN',
          undefined,
          undefined
        )
      ) {
        bh = this.callGetUWUsers(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oXTTBcW5S6dTvDZr');
    }
  }

  callGetUWUsers(bh) {
    try {
      let outputVariables = this.getUWUsers();

      bh = this.sd_9f8H9Hx2n80FPJPY(bh);
      //appendnew_next_callGetUWUsers
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nT5r1580NGHbMPkL');
    }
  }

  sd_9f8H9Hx2n80FPJPY(bh) {
    try {
      const page = this.page;
      page.displayOpt = (v) => v.username;
      //appendnew_next_sd_9f8H9Hx2n80FPJPY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9f8H9Hx2n80FPJPY');
    }
  }

  sd_D2IQEPnEllettPhu(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.sd_we9Cc3ZoalTH8bch(bh);
      //appendnew_next_sd_D2IQEPnEllettPhu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D2IQEPnEllettPhu');
    }
  }

  sd_we9Cc3ZoalTH8bch(bh) {
    try {
      const page = this.page;
      bh.local.url = bh.local.ssdBaseUrl + '/admin/uw/jbpm-users';
      bh = this.sd_Bv4AGf6H0clxLnCw(bh);
      //appendnew_next_sd_we9Cc3ZoalTH8bch
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_we9Cc3ZoalTH8bch');
    }
  }

  async sd_Bv4AGf6H0clxLnCw(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.users = await this.sdService.nHttpRequest(requestOptions);
      bh = this.f(bh);
      //appendnew_next_sd_Bv4AGf6H0clxLnCw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bv4AGf6H0clxLnCw');
    }
  }

  f(bh) {
    try {
      let outputVariables = this.acFilter('');

      //appendnew_next_f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P0xqf5FuvQJar7Nr');
    }
  }

  filter(bh) {
    try {
      const page = this.page;
      const filterValue = bh.input.v.toLowerCase();
      page.fds = page.users.filter((option) =>
        option.username.toLowerCase().includes(filterValue)
      );

      //appendnew_next_filter
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7ewKxZHyNBW7BwkC');
    }
  }

  assignToSelectedUser(bh) {
    try {
      const page = this.page;
      console.log((page.selectedUser = bh.input.e.option.value));

      //appendnew_next_assignToSelectedUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IIXJzPQ3kCyu7Q8q');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_reassignComponent_Catch
}
