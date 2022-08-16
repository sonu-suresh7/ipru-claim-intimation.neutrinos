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
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-alert',
  templateUrl: './alert.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class alertComponent {
  @Input('title')
  public title: any = 'Are You Sure?';
  @Input('description')
  public description: any = 'Do you want to continue with the action?';
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
      this.sd_6D0Jh5dimeSZz5UL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6D0Jh5dimeSZz5UL(bh) {
    try {
      bh = this.sd_Kdcp5nkvmvLPJ85E(bh);
      //appendnew_next_sd_6D0Jh5dimeSZz5UL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6D0Jh5dimeSZz5UL');
    }
  }

  //appendnew_flow_alertComponent_start

  sd_Kdcp5nkvmvLPJ85E(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      //appendnew_next_sd_Kdcp5nkvmvLPJ85E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kdcp5nkvmvLPJ85E');
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
  //appendnew_flow_alertComponent_Catch
}
