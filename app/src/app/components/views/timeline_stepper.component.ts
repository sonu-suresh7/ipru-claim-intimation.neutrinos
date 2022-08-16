/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  DoCheck,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-timeline_stepper',
  templateUrl: './timeline_stepper.template.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
    //appendnew_element_providers
  ],
})
export class timeline_stepperComponent {
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
      this.sd_8wg1bpa82HCcX31m(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8wg1bpa82HCcX31m(bh) {
    try {
      bh = this.sd_lLrx3a5epAxXLdOw(bh);
      //appendnew_next_sd_8wg1bpa82HCcX31m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8wg1bpa82HCcX31m');
    }
  }

  getStates(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { states: undefined };
      bh = this.sd_olyOyiYt6mNXNg7c(bh);
      //appendnew_next_getStates
      return bh.local.states;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0TtDIJW4JPXSm1Ud');
    }
  }

  //appendnew_flow_timeline_stepperComponent_start

  sd_lLrx3a5epAxXLdOw(bh) {
    try {
      this.page.stepperIcon = undefined;
      this.page.states = undefined;
      this.page.timeline = [];
      bh = this.sd_XiZPpTg9d6hLJebK(bh);
      //appendnew_next_sd_lLrx3a5epAxXLdOw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lLrx3a5epAxXLdOw');
    }
  }

  sd_XiZPpTg9d6hLJebK(bh) {
    try {
      const page = this.page;
      page.stepperIcon = ['edit', 'done', 'number'];

      page.timelineData = [
        {
          '3': {
            taskName: 'Underwriter',
            taskDesc: 'Underwriting for APPL12100000 by level UW_LEVEL_1',
            states: [
              {
                taskStatus: 'ADDED',
                actor: 'system',
                createdTime: 1648444614167,
                endTime: 1648444614181,
              },
              {
                taskStatus: 'STARTED',
                actor: 'krisv',
                createdTime: 1648444614167,
                endTime: 1648446487560,
              },
            ],
          },
        },
      ];
      bh = this.angularRouter(bh);
      //appendnew_next_sd_XiZPpTg9d6hLJebK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XiZPpTg9d6hLJebK');
    }
  }

  angularRouter(bh) {
    try {
      this.page.activatedRoute = this.__page_injector__.get(ActivatedRoute);
      bh = this.sd_eRZl00k7ylM0vKKT(bh);
      //appendnew_next_angularRouter
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WPY7XHqX9ifbvNng');
    }
  }

  sd_eRZl00k7ylM0vKKT(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      bh.co = cacheInstance['checkedOut'];
      bh = this.urlConstructor(bh);
      //appendnew_next_sd_eRZl00k7ylM0vKKT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eRZl00k7ylM0vKKT');
    }
  }

  urlConstructor(bh) {
    try {
      const page = this.page; // console.log('case---', bh.co);
      page.caseinfo = bh.co.case.caseDetails;
      bh.pid = bh.co.task['task-proc-inst-id'];
      bh.containerId = bh.co.task['task-container-id'];

      bh.url =
        page.system.environment.properties.ssdBaseUrl +
        '/case/audit/' +
        bh.pid +
        '/' +
        bh.containerId;
      bh = this.sd_AjmUbPOQDb974BPp(bh);
      //appendnew_next_urlConstructor
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9qrTPDbkvkaTdOQX');
    }
  }

  async sd_AjmUbPOQDb974BPp(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.timelineResult = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_7eYRySQX0vCEJetf(bh);
      //appendnew_next_sd_AjmUbPOQDb974BPp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AjmUbPOQDb974BPp');
    }
  }

  sd_7eYRySQX0vCEJetf(bh) {
    try {
      const page = this.page; // console.log('timeline result', page.timelineResult);
      page.states = [];

      if (page.timelineResult && Object.keys(page.timelineResult)?.length > 0) {
        // console.log(Object.keys(page.timelineResult));
        Object.keys(page.timelineResult).forEach((el, index) => {
          // console.log(el, index);
          page.timeline[index] = {};
          page.timeline[index]['states'] = page.timelineResult[el]?.states;
          page.timeline[index]['states'].forEach((state) => {
            state['taskName'] = page.timelineResult[el]?.taskName;
            state['taskDesc'] = page.timelineResult[el]?.taskDesc;
            state['createdTime'] = new Date(state.createdTime);
            state['startTime'] =
              new Date(state.createdTime).toLocaleDateString() +
              ' ' +
              new Date(state.createdTime).toLocaleTimeString();
            if (state['endTime']) {
              state['endTime'] =
                new Date(state['endTime']).toLocaleDateString() +
                ' ' +
                new Date(state['endTime']).toLocaleTimeString();
            }
            // console.log('state--', state);
          });
          // console.log(page.timeline);
        });
      }
      //appendnew_next_sd_7eYRySQX0vCEJetf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7eYRySQX0vCEJetf');
    }
  }

  sd_olyOyiYt6mNXNg7c(bh) {
    try {
      const page = this.page;
      page.timeline.forEach((el) => (bh.local.states = el.states));
      //appendnew_next_sd_olyOyiYt6mNXNg7c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_olyOyiYt6mNXNg7c');
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
  //appendnew_flow_timeline_stepperComponent_Catch
}
