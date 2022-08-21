/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-case_view',
  templateUrl: './case_view.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class case_viewComponent {
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
      this.sd_1Vmo1tedhXBt6PCE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1Vmo1tedhXBt6PCE(bh) {
    try {
      bh = this.sd_YmSkLEbpz4zeDwuz(bh);
      //appendnew_next_sd_1Vmo1tedhXBt6PCE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Vmo1tedhXBt6PCE');
    }
  }

  //appendnew_flow_case_viewComponent_start

  sd_YmSkLEbpz4zeDwuz(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      bh.co = cacheInstance['checkedOut'];
      bh = this.sd_0l4oD3Q4SXp8FEQ6(bh);
      //appendnew_next_sd_YmSkLEbpz4zeDwuz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YmSkLEbpz4zeDwuz');
    }
  }

  sd_0l4oD3Q4SXp8FEQ6(bh) {
    try {
      const page = this.page;
      page.caseDetails = bh.co.case.caseDetails;
      page.task = bh.co.task;

      console.log('page.caseDetails', page.caseDetails);
      if (bh.co.case['claimantObj'])
        sessionStorage.setItem(
          'caseClaimantObj',
          JSON.stringify(bh.co.case['claimantObj'])
        );
      page.caseDetails.primaryLife.coverageDetails.forEach((ele, index) => {
        page.caseDetails.primaryLife.coverageDetails[index]['current_premium'] =
          page.caseDetails.metadata.current_premium;
      });
      //appendnew_next_sd_0l4oD3Q4SXp8FEQ6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0l4oD3Q4SXp8FEQ6');
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
  //appendnew_flow_case_viewComponent_Catch
}
