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
//append_imports_end

@Component({
  selector: 'bh-settingsHeader',
  templateUrl: './settingsHeader.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class settingsHeaderComponent {
  @Input('cancelNav')
  public cancelNav: any = undefined;
  @Input('heading')
  public heading: any = undefined;
  @Output('save')
  public save: any = new EventEmitter<any>();
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
      this.sd_bjIRyb7n64sNZ7YM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bjIRyb7n64sNZ7YM(bh) {
    try {
      bh = this.sd_vhFdwmKHG5ibAaH5(bh);
      //appendnew_next_sd_bjIRyb7n64sNZ7YM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bjIRyb7n64sNZ7YM');
    }
  }

  emitSave(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_aXKhoHr0En4Y2by0(bh);
      //appendnew_next_emitSave
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KLLYxGnAnQqzLR2N');
    }
  }

  //appendnew_flow_settingsHeaderComponent_start

  sd_vhFdwmKHG5ibAaH5(bh) {
    try {
      //appendnew_next_sd_vhFdwmKHG5ibAaH5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vhFdwmKHG5ibAaH5');
    }
  }

  sd_aXKhoHr0En4Y2by0(bh) {
    try {
      bh.pageOutput.save.emit(true);
      //appendnew_next_sd_aXKhoHr0En4Y2by0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aXKhoHr0En4Y2by0');
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
  //appendnew_flow_settingsHeaderComponent_Catch
}
