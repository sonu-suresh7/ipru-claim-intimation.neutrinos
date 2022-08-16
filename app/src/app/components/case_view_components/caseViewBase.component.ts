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
import { cache } from 'app/sd-services/cache'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { wq } from 'app/sd-services/wq'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-caseViewBase',
  templateUrl: './caseViewBase.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class caseViewBaseComponent {
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
      this.sd_aLLdBsslKOmzRNQC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_aLLdBsslKOmzRNQC(bh) {
    try {
      bh = this.getCacheData(bh);
      //appendnew_next_sd_aLLdBsslKOmzRNQC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aLLdBsslKOmzRNQC');
    }
  }

  sd_koliPMpg8HVlVGct(bh) {
    try {
      bh = this.unsetCacheData(bh);
      //appendnew_next_sd_koliPMpg8HVlVGct
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_koliPMpg8HVlVGct');
    }
  }

  getResourceLinks(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_aRzcclWYKqjBjoW1(bh);
      //appendnew_next_getResourceLinks
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pWXnxVXigindtfM8');
    }
  }

  //appendnew_flow_caseViewBaseComponent_start

  getCacheData(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.getCasePid(bh);
      //appendnew_next_getCacheData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NmBigHyVg3f6ad7J');
    }
  }

  getCasePid(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.local.pid = route.snapshot.paramMap.get('pid');
      bh = this.convertPIDToNumber(bh);
      //appendnew_next_getCasePid
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lmLsqjgy2zjsypGl');
    }
  }

  convertPIDToNumber(bh) {
    try {
      const page = this.page;
      bh.local.pid = Number(bh.local.pid);
      bh = this.sd_RiOb5g2Tqtf27dzm(bh);
      //appendnew_next_convertPIDToNumber
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6qFncNiWwtCF3MPg');
    }
  }

  async sd_RiOb5g2Tqtf27dzm(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          this.page.checkedOut.task,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_e4gXbzVlqshbFdqj(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.caseUrlConstructor(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RiOb5g2Tqtf27dzm');
    }
  }

  caseUrlConstructor(bh) {
    try {
      const page = this.page;
      bh.local.url =
        page.system.environment.properties.ssdBaseUrl + '/case/' + bh.local.pid;

      bh = this.requestCase(bh);
      //appendnew_next_caseUrlConstructor
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DABvIe3lmTdWCQt0');
    }
  }

  async requestCase(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.assignCase(bh);
      //appendnew_next_requestCase
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yzKuPnAWeOwHtAYW');
    }
  }

  assignCase(bh) {
    try {
      const page = this.page;
      page.checkedOut.case = bh.local.res.case;

      //appendnew_next_assignCase
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p1IvNPfW66v6AQyV');
    }
  }

  sd_e4gXbzVlqshbFdqj(bh) {
    try {
      const page = this.page;
      bh.local.wqConf = {
        // "_id": "6257ea94269774b8e78af739",
        // "workQueueId": "6257cecd269774b8e7515e45",
        selectedColumns: [
          'applicationNumber',
          'task-name',
          'task-created-on',
          'policyStatus',
          'task-status',
        ],
        label: 'Default Queue',
        filters: { status: ['Reserved', 'InProgress'] },
        // "default": true
      };
      bh = this.callCsdGetQTasks(bh);
      //appendnew_next_sd_e4gXbzVlqshbFdqj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e4gXbzVlqshbFdqj');
    }
  }

  async callCsdGetQTasks(bh) {
    try {
      const wqInstance: wq = this.__page_injector__.get(wq);

      let outputVariables = await wqInstance.getDefaultQTasks();
      bh.local.reponsePayload = outputVariables.local.reponsePayload;

      bh = this.findAndAssignTasks(bh);
      //appendnew_next_callCsdGetQTasks
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pYQV1jw2Ry2GOuYe');
    }
  }

  findAndAssignTasks(bh) {
    try {
      const page = this.page;
      page.checkedOut.task = bh.local.reponsePayload.tasks?.find(
        (t) => t.pid === bh.local.pid
      );
      bh = this.caseUrlConstructor(bh);
      //appendnew_next_findAndAssignTasks
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yMVFBPFAnW3yIyNg');
    }
  }

  unsetCacheData(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      cacheInstance['checkedOut'] = {};
      //appendnew_next_unsetCacheData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nlmDJitzyJre7hZ9');
    }
  }

  sd_aRzcclWYKqjBjoW1(bh) {
    try {
      const page = this.page;
      this.page.resourceLinksResult = [...bh.input.event];
      //appendnew_next_sd_aRzcclWYKqjBjoW1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aRzcclWYKqjBjoW1');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_koliPMpg8HVlVGct(bh);
    }
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
  //appendnew_flow_caseViewBaseComponent_Catch
}
