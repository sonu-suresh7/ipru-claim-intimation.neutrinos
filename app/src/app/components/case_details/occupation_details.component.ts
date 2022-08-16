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
  selector: 'bh-occupation_details',
  templateUrl: './occupation_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class occupation_detailsComponent {
  @Input('occupationDetails')
  public occupationDetails: any = undefined;
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
      this.sd_oCdZNKmR1JDV52Wi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_oCdZNKmR1JDV52Wi(bh) {
    try {
      bh = this.sd_NPR0L7TgtlFrnnp5(bh);
      //appendnew_next_sd_oCdZNKmR1JDV52Wi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oCdZNKmR1JDV52Wi');
    }
  }

  //appendnew_flow_occupation_detailsComponent_start

  sd_NPR0L7TgtlFrnnp5(bh) {
    try {
      //appendnew_next_sd_NPR0L7TgtlFrnnp5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NPR0L7TgtlFrnnp5');
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
  //appendnew_flow_occupation_detailsComponent_Catch
}
