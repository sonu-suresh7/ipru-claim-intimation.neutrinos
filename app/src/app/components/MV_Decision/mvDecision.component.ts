/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  DoCheck,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-mvDecision',
  templateUrl: './mvDecision.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class mvDecisionComponent {
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
      this.sd_Gm3SK0bLpbsKnqP7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Gm3SK0bLpbsKnqP7(bh) {
    try {
      bh = this.sd_M2OLar4GhIJ4OPhA(bh);
      //appendnew_next_sd_Gm3SK0bLpbsKnqP7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gm3SK0bLpbsKnqP7');
    }
  }

  saveAndExit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { sne: true };
      bh = this.prepareRequestCommon(bh);
      //appendnew_next_saveAndExit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0LR3uiIBfMNeXckH');
    }
  }

  submit(submitType: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { submitType: submitType };
      bh.local = {};
      bh = this.prepareRequestCommon(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_biErSxK8MlqMEef3');
    }
  }

  //appendnew_flow_mvDecisionComponent_start

  sd_M2OLar4GhIJ4OPhA(bh) {
    try {
      this.page.form = { decision: 'reject', comments: '' };
      bh = this.sd_Pq2FSnfPlhp6oLdu(bh);
      //appendnew_next_sd_M2OLar4GhIJ4OPhA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M2OLar4GhIJ4OPhA');
    }
  }

  sd_Pq2FSnfPlhp6oLdu(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.reMapDecision(bh);
      //appendnew_next_sd_Pq2FSnfPlhp6oLdu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pq2FSnfPlhp6oLdu');
    }
  }

  reMapDecision(bh) {
    try {
      const page = this.page;
      const level = 'Manual Verification';
      const decision = (page.checkedOut.case.decisions || []).find(
        (d) => d.level === level
      );
      if (decision) {
        page.form = {
          decision: decision.decision,
          comments: decision.comments,
        };
      }

      //appendnew_next_reMapDecision
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q3RYVfXNRbl7YYem');
    }
  }

  prepareRequestCommon(bh) {
    try {
      const page = this.page;
      const coCase = page.checkedOut.case;
      const level = 'Manual Verification';
      coCase.decisions = coCase.decisions || [];
      const levelDecisionIndex = coCase.decisions.findIndex(
        (d) => d.level === level
      );
      const user = (coCase.lastUser =
        page.system.oauthService.currentUserInfo?.additional?.jbpm || 'krisv');
      const decisionItem = {
        level,
        decision: page.form.decision,
        comments: page.form.comments,
        user,
        datetime: new Date().toISOString(),
      };
      if (levelDecisionIndex > -1) {
        coCase.decisions[levelDecisionIndex] = decisionItem;
      } else {
        coCase.decisions.push(decisionItem);
      }
      bh.local.body = {
        case: coCase,
      };

      bh = this.sd_oJZVO6JH0Sx6eObw(bh);
      //appendnew_next_prepareRequestCommon
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aL25VNnBsDBveFMp');
    }
  }

  async sd_oJZVO6JH0Sx6eObw(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sne,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.prepareSneReq(bh);
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
        bh = await this.prepareSubmitRequest(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oJZVO6JH0Sx6eObw');
    }
  }

  prepareSneReq(bh) {
    try {
      const page = this.page;
      bh.local.url = `${page.system.environment.properties.ssdBaseUrl}/case/decision/save`;

      bh = this.sd_xfVSQhBsgmDbm4zf(bh);
      //appendnew_next_prepareSneReq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FR6ub9yaEcpzwOJI');
    }
  }

  async sd_xfVSQhBsgmDbm4zf(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'text',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_joM2xfUrFa4zQt2a(bh);
      //appendnew_next_sd_xfVSQhBsgmDbm4zf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xfVSQhBsgmDbm4zf');
    }
  }

  async sd_joM2xfUrFa4zQt2a(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/web/nav/workqueue');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_joM2xfUrFa4zQt2a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_joM2xfUrFa4zQt2a');
    }
  }

  prepareSubmitRequest(bh) {
    try {
      const page = this.page;
      bh.local.body.taskId = page.checkedOut.task['task-id'];
      bh.local.body.containerId = page.checkedOut.task['task-container-id'];

      bh.local.url = `${page.system.environment.properties.ssdBaseUrl}/case/decision/mv/submit`;

      bh = this.sd_xfVSQhBsgmDbm4zf(bh);
      //appendnew_next_prepareSubmitRequest
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VwKY4MjQfjYEDFFm');
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
  //appendnew_flow_mvDecisionComponent_Catch
}
