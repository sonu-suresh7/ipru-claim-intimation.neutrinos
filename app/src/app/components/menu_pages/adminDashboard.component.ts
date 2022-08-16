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
  selector: 'bh-adminDashboard',
  templateUrl: './adminDashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class adminDashboardComponent {
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
      this.sd_YgxP0zhBO1Hsru5p(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_YgxP0zhBO1Hsru5p(bh) {
    try {
      bh = this.sd_EMnGZ8jS5sV6cD8y(bh);
      //appendnew_next_sd_YgxP0zhBO1Hsru5p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YgxP0zhBO1Hsru5p');
    }
  }

  openRightSideBar(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { emailData: undefined };
      bh = this.sd_LBE57FFEAwKt7N4A(bh);
      //appendnew_next_openRightSideBar
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GtJu7X4oJAGf8bNj');
    }
  }

  //appendnew_flow_adminDashboardComponent_start

  sd_EMnGZ8jS5sV6cD8y(bh) {
    try {
      //appendnew_next_sd_EMnGZ8jS5sV6cD8y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EMnGZ8jS5sV6cD8y');
    }
  }

  sd_LBE57FFEAwKt7N4A(bh) {
    try {
      const page = this.page;
      bh.local.rsnComponent = 'EMAIL';
      bh.local.emailData = {
        name: 'EmailComponent',
        viewName: 'emailComponent',
        data: {},
      };
      bh = this.sd_nksVkvt6lphVnCmV(bh);
      //appendnew_next_sd_LBE57FFEAwKt7N4A
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LBE57FFEAwKt7N4A');
    }
  }

  sd_nksVkvt6lphVnCmV(bh) {
    try {
      bh.system.pubsubService.$pub('open-rsn', bh);
      //appendnew_next_sd_nksVkvt6lphVnCmV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nksVkvt6lphVnCmV');
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
  //appendnew_flow_adminDashboardComponent_Catch
}
