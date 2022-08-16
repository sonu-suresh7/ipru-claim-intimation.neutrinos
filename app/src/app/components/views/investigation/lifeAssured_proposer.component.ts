/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-lifeAssured_proposer',
  templateUrl: './lifeAssured_proposer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class lifeAssured_proposerComponent {
  @Input('policy_details')
  public policy_details: any = {};
  @Input('section')
  public section: any = undefined;
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
      this.sd_gYd51c2KSAeXjGpM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_gYd51c2KSAeXjGpM(bh) {
    try {
      bh = this.sd_Y70nS2vz5uO3VrtF(bh);
      //appendnew_next_sd_gYd51c2KSAeXjGpM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gYd51c2KSAeXjGpM');
    }
  }

  titleCase(text: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { text: text };
      bh.local = { title_case: undefined };
      bh = this.sd_DB97L2AX0mtqneUv(bh);
      //appendnew_next_titleCase
      return bh.local.title_case;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BfNbsenranIrKvaj');
    }
  }

  //appendnew_flow_lifeAssured_proposerComponent_start

  sd_Y70nS2vz5uO3VrtF(bh) {
    try {
      //appendnew_next_sd_Y70nS2vz5uO3VrtF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y70nS2vz5uO3VrtF');
    }
  }

  sd_DB97L2AX0mtqneUv(bh) {
    try {
      const page = this.page;
      const result = bh.input.text.replace(/([A-Z])/g, ' $1');
      bh.local.title_case = result.charAt(0).toUpperCase() + result.slice(1);
      //appendnew_next_sd_DB97L2AX0mtqneUv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DB97L2AX0mtqneUv');
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
  //appendnew_flow_lifeAssured_proposerComponent_Catch
}
