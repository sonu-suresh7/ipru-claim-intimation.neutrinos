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
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-investigation_detials',
  templateUrl: './investigation_detials.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class investigation_detialsComponent {
  @Input('investigation')
  public investigation: any = {};
  @Input('typeOfInvestigation')
  public typeOfInvestigation: any = '';
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
      this.sd_zkqCclTlykd5F2D5(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zkqCclTlykd5F2D5(bh) {
    try {
      bh = this.sd_d8FQlex2QKSG6DpM(bh);
      //appendnew_next_sd_zkqCclTlykd5F2D5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zkqCclTlykd5F2D5');
    }
  }

  titleCase(text: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { text: text };
      bh.local = { title_case: undefined };
      bh = this.sd_VIDY3b15lZokvIvs(bh);
      //appendnew_next_titleCase
      return bh.local.title_case;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5uus65ZsLjA0AFiL');
    }
  }

  //appendnew_flow_investigation_detialsComponent_start

  sd_d8FQlex2QKSG6DpM(bh) {
    try {
      //appendnew_next_sd_d8FQlex2QKSG6DpM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d8FQlex2QKSG6DpM');
    }
  }

  sd_VIDY3b15lZokvIvs(bh) {
    try {
      const page = this.page;
      const result = bh.input.text.replace(/([A-Z])/g, ' $1');
      bh.local.title_case = result.charAt(0).toUpperCase() + result.slice(1);
      //appendnew_next_sd_VIDY3b15lZokvIvs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VIDY3b15lZokvIvs');
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
  //appendnew_flow_investigation_detialsComponent_Catch
}
