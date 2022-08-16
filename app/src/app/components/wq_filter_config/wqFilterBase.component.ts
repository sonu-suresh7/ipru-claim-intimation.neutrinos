/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  DoCheck,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormBuilder, Validators, FormControl } from '@angular/forms'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-wqFilterBase',
  templateUrl: './wqFilterBase.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class wqFilterBaseComponent {
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
      this.sd_1jNu2DcCYPjM0Eh4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1jNu2DcCYPjM0Eh4(bh) {
    try {
      bh = this.sd_EeG51I6c7J1QdlTq(bh);
      //appendnew_next_sd_1jNu2DcCYPjM0Eh4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1jNu2DcCYPjM0Eh4');
    }
  }

  addToFilterFields(opt: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { opt: opt };
      bh.local = {};
      bh = this.sd_oG1sr4j6WMRYKslv(bh);
      //appendnew_next_addToFilterFields
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2nOTqLfjcGIqh3Wv');
    }
  }

  createFilter(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OPDcQWJINXCmLPlb(bh);
      //appendnew_next_createFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f3wCtsopQcgbE9qL');
    }
  }

  //appendnew_flow_wqFilterBaseComponent_start

  sd_EeG51I6c7J1QdlTq(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_kH4i8rjccZUUbbnX(bh);
      //appendnew_next_sd_EeG51I6c7J1QdlTq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EeG51I6c7J1QdlTq');
    }
  }

  sd_kH4i8rjccZUUbbnX(bh) {
    try {
      this.page.selectedIndex = 0;
      this.page.filterForm = undefined;
      bh = this.sd_Q05LyYwhMyuXLqfA(bh);
      //appendnew_next_sd_kH4i8rjccZUUbbnX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kH4i8rjccZUUbbnX');
    }
  }

  sd_Q05LyYwhMyuXLqfA(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.columnConf = cacheInstance['columns'];
      bh = this.sd_zfWtcNTc1AnwJkAA(bh);
      //appendnew_next_sd_Q05LyYwhMyuXLqfA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q05LyYwhMyuXLqfA');
    }
  }

  sd_zfWtcNTc1AnwJkAA(bh) {
    try {
      const page = this.page;
      page.filterForm = page.fb.group({
        label: ['', Validators.required],
        filters: page.fb.group({}),
      });

      console.log(
        'page.filterForm.controls.filters.controls',
        page.filterForm.controls.filters.controls
      );

      page.fields = Object.values(page.columnConf).filter((c: any) => c.key);
      //appendnew_next_sd_zfWtcNTc1AnwJkAA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zfWtcNTc1AnwJkAA');
    }
  }

  sd_oG1sr4j6WMRYKslv(bh) {
    try {
      const page = this.page;
      Object.keys(page.filterForm.controls.filters.controls).forEach((v) =>
        page.filterForm.controls.filters.removeControl(v)
      );
      bh.input.opt.value.forEach((v) => {
        page.filterForm.controls.filters.addControl(
          v,
          page.fb.control('', [Validators.required])
        );
      });
      //appendnew_next_sd_oG1sr4j6WMRYKslv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oG1sr4j6WMRYKslv');
    }
  }

  sd_OPDcQWJINXCmLPlb(bh) {
    try {
      const page = this.page;
      bh.url = page.system.environment.properties.ssdBaseUrl + '/wq/upsert';
      bh.body = page.filterForm.value;

      console.log(bh.body);
      bh = this.sd_rgV4WHyzooXkenHP(bh);
      //appendnew_next_sd_OPDcQWJINXCmLPlb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OPDcQWJINXCmLPlb');
    }
  }

  async sd_rgV4WHyzooXkenHP(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.r = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_z82uklABfPz8niyp(bh);
      //appendnew_next_sd_rgV4WHyzooXkenHP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rgV4WHyzooXkenHP');
    }
  }

  sd_z82uklABfPz8niyp(bh) {
    try {
      bh.system.pubsubService.$pub('refresh-wq', bh);
      //appendnew_next_sd_z82uklABfPz8niyp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z82uklABfPz8niyp');
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
  //appendnew_flow_wqFilterBaseComponent_Catch
}
