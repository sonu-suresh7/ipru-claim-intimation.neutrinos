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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-policy_details',
  templateUrl: './policy_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class policy_detailsComponent {
  @Input('policy_details')
  public policy_details: any = {};
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
      this.sd_XtfJAcf3ar0mNCmx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XtfJAcf3ar0mNCmx(bh) {
    try {
      bh = this.sd_1W2WaO23FUMtJn3R(bh);
      //appendnew_next_sd_XtfJAcf3ar0mNCmx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XtfJAcf3ar0mNCmx');
    }
  }

  filterPolicyDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { details: undefined };
      bh = this.sd_hCngiSNazOM07sdY(bh);
      //appendnew_next_filterPolicyDetails
      return bh.local.details;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oakw8kEGaiRS6uk3');
    }
  }

  titleCase(text: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { text: text };
      bh.local = { title_case: undefined };
      bh = this.sd_Qntnu3Na5W3oYwWL(bh);
      //appendnew_next_titleCase
      return bh.local.title_case;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6lwPvPvPEKyLWKIu');
    }
  }

  //appendnew_flow_policy_detailsComponent_start

  sd_1W2WaO23FUMtJn3R(bh) {
    try {
      bh = this.sd_cspzT6FZ2k9MnWGT(bh);
      //appendnew_next_sd_1W2WaO23FUMtJn3R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1W2WaO23FUMtJn3R');
    }
  }

  sd_cspzT6FZ2k9MnWGT(bh) {
    try {
      const page = this.page;
      console.log('init', this.policy_details);
      //appendnew_next_sd_cspzT6FZ2k9MnWGT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cspzT6FZ2k9MnWGT');
    }
  }

  sd_hCngiSNazOM07sdY(bh) {
    try {
      const page = this.page;
      const filter = [
        'policyStatus',
        'policyNumber',
        'policyTerm',
        'productName',
        'policyIssueDate',
        'sumAssured',
        'policyStatusCode',
        'underwritingDecision',
      ];
      bh.local.details = Object.keys(this.policy_details?.policy)
        .filter((key) => filter.includes(key))
        .reduce((cur, key) => {
          return Object.assign(cur, { [key]: this.policy_details.policy[key] });
        }, {});
      //appendnew_next_sd_hCngiSNazOM07sdY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hCngiSNazOM07sdY');
    }
  }

  sd_Qntnu3Na5W3oYwWL(bh) {
    try {
      const page = this.page;
      const result = bh.input.text.replace(/([A-Z])/g, ' $1');
      bh.local.title_case = result.charAt(0).toUpperCase() + result.slice(1);
      //appendnew_next_sd_Qntnu3Na5W3oYwWL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qntnu3Na5W3oYwWL');
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
  //appendnew_flow_policy_detailsComponent_Catch
}
