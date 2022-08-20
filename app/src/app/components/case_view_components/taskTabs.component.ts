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
  selector: 'bh-taskTabs',
  templateUrl: './taskTabs.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class taskTabsComponent {
  @Input('task')
  public task: any = undefined;
  @Output('resourceLinkData')
  public resourceLinkData: any = new EventEmitter<any>();
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
      this.sd_1FwEIjEF4kAha0Xx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1FwEIjEF4kAha0Xx(bh) {
    try {
      bh = this.sd_jM5N4ZbqebtNh55B(bh);
      //appendnew_next_sd_1FwEIjEF4kAha0Xx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1FwEIjEF4kAha0Xx');
    }
  }

  //appendnew_flow_taskTabsComponent_start

  sd_jM5N4ZbqebtNh55B(bh) {
    try {
      const page = this.page;
      bh.url =
        bh.system.environment.properties.ssdBaseUrl +
        '/uiconfig/task-tabs/' +
        bh.pageInput.task['task-name'];

      if (bh.pageInput.task['task-name'] == 'Manual Verification') {
        sessionStorage.setItem('task-name', bh.pageInput.task['task-name']);
      } else {
        sessionStorage.removeItem('task-name');
      }

      bh = this.getTabsForTaskType(bh);
      //appendnew_next_sd_jM5N4ZbqebtNh55B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jM5N4ZbqebtNh55B');
    }
  }

  async getTabsForTaskType(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_p9dWUVo97cdtwkqh(bh);
      //appendnew_next_getTabsForTaskType
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QoBmE1jEe7oqGCs5');
    }
  }

  sd_p9dWUVo97cdtwkqh(bh) {
    try {
      const page = this.page;
      page.tabs = bh.res.tabs;
      if (bh.res.resourceLinks) {
        this.resourceLinkData.emit(bh.res.resourceLinks);
      }
      //appendnew_next_sd_p9dWUVo97cdtwkqh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p9dWUVo97cdtwkqh');
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
  //appendnew_flow_taskTabsComponent_Catch
}
