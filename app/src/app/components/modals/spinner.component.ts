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
import { loaderService } from 'app/services/loader/loader.service'; //_splitter_
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-spinner',
  templateUrl: './spinner.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class spinnerComponent {
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
      this.sd_ovw5LVXj8rPzSWIg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ovw5LVXj8rPzSWIg(bh) {
    try {
      bh = this.sd_3srjZXGcQgeql0Yx(bh);
      //appendnew_next_sd_ovw5LVXj8rPzSWIg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ovw5LVXj8rPzSWIg');
    }
  }

  //appendnew_flow_spinnerComponent_start

  sd_3srjZXGcQgeql0Yx(bh) {
    try {
      this.page._loaderService = this.__page_injector__.get(loaderService);
      bh = this.sd_MX6dFc599H34SP39(bh);
      //appendnew_next_sd_3srjZXGcQgeql0Yx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3srjZXGcQgeql0Yx');
    }
  }

  sd_MX6dFc599H34SP39(bh) {
    try {
      this.page.isLoading = undefined;
      bh = this.sd_8hmhIbchf94FWzJB(bh);
      //appendnew_next_sd_MX6dFc599H34SP39
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MX6dFc599H34SP39');
    }
  }

  sd_8hmhIbchf94FWzJB(bh) {
    try {
      const page = this.page;
      page.isLoading = page._loaderService.isLoading;
      bh = this.sd_yCnq02t7Nqt33KY5(bh);
      //appendnew_next_sd_8hmhIbchf94FWzJB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8hmhIbchf94FWzJB');
    }
  }

  sd_yCnq02t7Nqt33KY5(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      //appendnew_next_sd_yCnq02t7Nqt33KY5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yCnq02t7Nqt33KY5');
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
  //appendnew_flow_spinnerComponent_Catch
}
