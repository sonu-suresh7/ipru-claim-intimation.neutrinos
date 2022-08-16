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
//append_imports_end

@Component({
  selector: 'bh-other_policies_base',
  templateUrl: './other_policies_base.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class other_policies_baseComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_WGGitB3tKoXkaQtt(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_WGGitB3tKoXkaQtt(bh) {
    try {
      bh = this.sd_h312JZ4FoD8wYb80(bh);
      //appendnew_next_sd_WGGitB3tKoXkaQtt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WGGitB3tKoXkaQtt');
    }
  }

  filteredPoliciesFromClient(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_qTac9AD1ezaBLkSP(bh);
      //appendnew_next_filteredPoliciesFromClient
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oCdyOjqit5HH6O63');
    }
  }

  //appendnew_flow_other_policies_baseComponent_start

  sd_h312JZ4FoD8wYb80(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      bh.co = cacheInstance['checkedOut'];
      bh = this.sd_tUdiU64BLv5gwH4K(bh);
      //appendnew_next_sd_h312JZ4FoD8wYb80
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h312JZ4FoD8wYb80');
    }
  }

  sd_tUdiU64BLv5gwH4K(bh) {
    try {
      this.page.policies = [];
      this.page.clientsArr = [];
      this.page.case = [];
      bh = this.sd_x0TsJ6xKrY6znfbb(bh);
      //appendnew_next_sd_tUdiU64BLv5gwH4K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tUdiU64BLv5gwH4K');
    }
  }

  sd_x0TsJ6xKrY6znfbb(bh) {
    try {
      const page = this.page;
      page.caseDetails = bh.co.case.caseDetails;
      page.case = bh.co.case;
      //appendnew_next_sd_x0TsJ6xKrY6znfbb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x0TsJ6xKrY6znfbb');
    }
  }

  sd_qTac9AD1ezaBLkSP(bh) {
    try {
      const page = this.page;
      if (bh.input.event) {
        page.policies = [...bh.input.event];
      }
      //appendnew_next_sd_qTac9AD1ezaBLkSP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qTac9AD1ezaBLkSP');
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
  //appendnew_flow_other_policies_baseComponent_Catch
}
