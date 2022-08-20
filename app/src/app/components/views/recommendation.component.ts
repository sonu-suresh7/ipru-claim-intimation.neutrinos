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
import { Router } from '@angular/router'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-recommendation',
  templateUrl: './recommendation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class recommendationComponent {
  @Output('selectedRecommendation')
  public selectedRecommendation: any = new EventEmitter<any>();
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
      this.sd_jiixVnby5XvfGFYe(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jiixVnby5XvfGFYe(bh) {
    try {
      bh = this.router(bh);
      //appendnew_next_sd_jiixVnby5XvfGFYe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jiixVnby5XvfGFYe');
    }
  }

  createFINFO(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.compute(bh);
      //appendnew_next_createFINFO
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BFUIcGA9EEskhNev');
    }
  }

  addReferral(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.computeReferral(bh);
      //appendnew_next_addReferral
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bRQ7Dpye8GPgmWrO');
    }
  }

  prepareDecision(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_yrZcmrO4TkUmi5rr(bh);
      //appendnew_next_prepareDecision
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z9Lwnng6W1Kuny9N');
    }
  }

  submit(submitType: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { submitType: submitType };
      bh.local = {};
      bh = this.sd_ZTOx6IrjxZDvQHrz(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HnkfoUCfr3Xx6QRv');
    }
  }

  changeButton(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_0hx3V0i3q7h2X7ra(bh);
      //appendnew_next_changeButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UAwHiSPFf2LFZoyb');
    }
  }

  recheck(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TfMSOu4vLclw0zyG(bh);
      //appendnew_next_recheck
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_syMlzs0NDf79YsTI');
    }
  }

  //appendnew_flow_recommendationComponent_start

  router(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_1SO6So9m5mlwBzoM(bh);
      //appendnew_next_router
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PBqOvPhOeNrotaof');
    }
  }

  sd_1SO6So9m5mlwBzoM(bh) {
    try {
      this.page.recomendation = undefined;
      this.page.selectedRecommendation = [];
      this.page.decision = {};
      this.page.currentDecision = undefined;
      this.page.loggedInRole = undefined;
      this.page.clickedDecisions = [];
      this.page.autoRecommendationVersion = undefined;
      this.page.versionsList = [];
      bh = this.sd_MeIcZVY3JyZnsHlx(bh);
      //appendnew_next_sd_1SO6So9m5mlwBzoM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1SO6So9m5mlwBzoM');
    }
  }

  sd_MeIcZVY3JyZnsHlx(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      this.page.loggedInRole = cacheInstance['loggedInRole'];
      bh = this.sd_oQRb7AMgrby0PPbt(bh);
      //appendnew_next_sd_MeIcZVY3JyZnsHlx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MeIcZVY3JyZnsHlx');
    }
  }

  sd_oQRb7AMgrby0PPbt(bh) {
    try {
      const page = this.page;
      page.dontShowMyDecision = false;
      page.recommendation = [
        // {
        //     get key() {
        //         return page.locales.keys.auto
        //     },
        //     value: 'autoRecommendation'
        // },
        {
          get key() {
            let taskNname = sessionStorage.getItem('task-name');

            if (taskNname && taskNname == 'Manual Verification') {
              return 'Add Info';
            }

            return page.locales.keys.finfo;
          },
          value: 'finfo',
        },
        // {
        //     get key() {
        //         return page.locales.keys.refer
        //     },
        //     value: 'referrals'
        // },
        // {
        //     get key() {
        //         return page.locales.keys.myDecision
        //     },
        //     value: 'decisions'
        // }
      ];

      let autoRecommendation = page.checkedOut.case['autoRecommendation'] || [];
      let finfo = page.checkedOut.case['finfo'] || [];
      let refer = page.checkedOut.case['referrals'] || [];
      let myDecision = page.checkedOut.case['decisions'] || [];

      if (autoRecommendation.length > 0) {
        page.selectedRecommendation.push('autoRecommendation');
      }

      if (finfo.length > 0) {
        page.selectedRecommendation.push('finfo');
      }

      if (refer.length > 0) {
        page.selectedRecommendation.push('referrals');
      }

      if (
        myDecision.length > 0 &&
        page.loggedInRole == myDecision[myDecision.length - 1].level
      ) {
        page.selectedRecommendation.push('decisions');
      }

      page.autoDecision = page.checkedOut.case['autoDecision']
        ? ` - ${page.checkedOut.case['autoDecision']}`
        : '';

      page.caseDetails = page.checkedOut;

      page.autoRecommendationVersion = 1.0;
      page.versionsList.push(page.autoRecommendationVersion);

      // page.selectedRecommendation = [ 'decisions']

      let taskNname = sessionStorage.getItem('task-name');

      if (taskNname && taskNname == 'Manual Verification') {
        page.dontShowMyDecision = true;
        page.selectedRecommendation.push('finfo');
      }
      //appendnew_next_sd_oQRb7AMgrby0PPbt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oQRb7AMgrby0PPbt');
    }
  }

  compute(bh) {
    try {
      const page = this.page;
      bh.local.rsnComponent = 'CREATE_FINFO';
      bh = this.sd_C4JqiirwA3JTb3jm(bh);
      //appendnew_next_compute
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sn5v5MgFnIyFmqIH');
    }
  }

  sd_C4JqiirwA3JTb3jm(bh) {
    try {
      bh.system.pubsubService.$pub('open-rsn', bh);
      //appendnew_next_sd_C4JqiirwA3JTb3jm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C4JqiirwA3JTb3jm');
    }
  }

  computeReferral(bh) {
    try {
      const page = this.page;
      bh.local.rsnComponent = 'ADD_REFERRAL';
      bh = this.sd_hIYFkWTslSN1LrBd(bh);
      //appendnew_next_computeReferral
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7lSBab8CfOLHvn7Q');
    }
  }

  sd_hIYFkWTslSN1LrBd(bh) {
    try {
      bh.system.pubsubService.$pub('open-rsn', bh);
      //appendnew_next_sd_hIYFkWTslSN1LrBd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hIYFkWTslSN1LrBd');
    }
  }

  sd_yrZcmrO4TkUmi5rr(bh) {
    try {
      const page = this.page;
      if (bh.input.event) {
        page.decision = bh.input.event;
      }
      //appendnew_next_sd_yrZcmrO4TkUmi5rr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yrZcmrO4TkUmi5rr');
    }
  }

  sd_ZTOx6IrjxZDvQHrz(bh) {
    try {
      const page = this.page;
      bh.local.isValidReq = false;

      bh.local.paylaod = {
        currentDecision: null,
        taskId: page.checkedOut.task['task-id'],
        containerId: page.checkedOut.task['task-container-id'],
      };

      let isMyDecision = true;

      // if (page.decision && page.decision.benefits) {
      //     for (let i = 0; i < page.decision.benefits.length; i++) {
      //         if (page.decision.benefits[i].decision) {
      //             isMyDecision = true;
      //         }
      //     }

      // }
      if (isMyDecision) {
        if (!page.checkedOut.case['decisions']) {
          page.checkedOut.case['decisions'] = [];
        }
        page.checkedOut.case['decisions'].push(page.decision);
        bh.local.paylaod['currentDecision'] = 'myDecision';
        page.checkedOut.case.draftDecision = 'myDecision';
      }

      // if (page.checkedOut.case['finfo'].length > 0 && !isMyDecision) {
      //     let isNewFinfo = false;

      //     for (let j = 0; j < page.checkedOut.case['finfo'].length; j++) {
      //         if (page.checkedOut.case['finfo'][j].finfoId) {
      //             isNewFinfo = true;
      //         }
      //     }

      //     if ((page.clickedDecisions.indexOf('finfo') > -1) || isNewFinfo) {
      //         bh.local.paylaod['currentDecision'] = 'finfo';
      //         page.checkedOut.case.draftDecision = 'finfo';
      //     }
      // }

      if (
        !bh.local.paylaod.currentDecision &&
        page.checkedOut.case.draftDecision
      ) {
        bh.local.paylaod.currentDecision = page.checkedOut.case.draftDecision;
      }

      page.checkedOut.case['lastUser'] =
        page.system.oauthService?.currentUserInfo?.additional?.jbpm || 'krisv';
      bh.local.paylaod['decisionUser'] =
        page.system.oauthService.userInfo.username;
      bh.local.paylaod['case'] = page.checkedOut.case;

      if (bh.local.paylaod.currentDecision) {
        bh.local.isValidReq = true;
      }

      if (bh.input.submitType === 'save&Exit') {
        bh.local.isValidReq = true;
        bh.local.url = `${page.system.environment.properties.ssdBaseUrl}/case/decision/save`;
      } else if (bh.input.submitType === 'submit') {
        bh.local.url = `${page.system.environment.properties.ssdBaseUrl}/case/decision/uw/submit`;
      }

      // console.log(page.selectedRecommendation.indexOf('finfo'));
      // bh.local.body = page.checkedOut;
      // if (page.currentDecision === 'finfo') {
      //     bh.local.body['currentDecision'] = 'finfo';
      // } else if (page.currentDecision === 'decisions') {
      //     bh.local.body['currentDecision'] = 'myDecision';
      // }
      // bh.local.body.case['decisions'] = decisionsArr;
      // bh.local.body.case['lastUser'] = page.system.oauthService.userInfo.username;
      // delete bh.local.body['task'];

      // if (bh.input.submitType === 'save&Exit') {
      //     bh.local.url = `${page.system.environment.properties.ssdBaseUrl}/case/decision/save`;
      // } else if (bh.input.submitType === 'submit') {
      //     bh.local.url = `${page.system.environment.properties.ssdBaseUrl}/case/decision/uw/submit`;
      // }
      // // page.dataToBeSubmitted = {
      // //     currentDecision: decisionsArr.length > 0 ? 'myDecision' : 'finfo',
      // //     submitType: bh.input.submitType,
      // //     decisions: decisionsArr
      // // }
      // console.log('submit data--', page.checkedOut);
      bh = this.sd_ywDX3ZJM10Naj9nM(bh);
      //appendnew_next_sd_ZTOx6IrjxZDvQHrz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZTOx6IrjxZDvQHrz');
    }
  }

  sd_ywDX3ZJM10Naj9nM(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isValidReq,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_OzW6GmwEPy3wYkVT(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValidReq,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_FOTL6k2hWKe6G5qY(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywDX3ZJM10Naj9nM');
    }
  }

  async sd_OzW6GmwEPy3wYkVT(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'text',
        headers: {},
        params: {},
        body: bh.local.paylaod,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_iJqPkWs6FAMH1auM(bh);
      //appendnew_next_sd_OzW6GmwEPy3wYkVT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OzW6GmwEPy3wYkVT');
    }
  }

  sd_iJqPkWs6FAMH1auM(bh) {
    try {
      const page = this.page;
      if (bh.local.response) {
        page.router.navigate(['/web/nav/workqueue']);
      }
      //appendnew_next_sd_iJqPkWs6FAMH1auM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iJqPkWs6FAMH1auM');
    }
  }

  sd_FOTL6k2hWKe6G5qY(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Invalid decision', 'Ok', {
        duration: 10000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_FOTL6k2hWKe6G5qY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FOTL6k2hWKe6G5qY');
    }
  }

  sd_0hx3V0i3q7h2X7ra(bh) {
    try {
      const page = this.page;
      if (page.clickedDecisions.indexOf(bh.input.event) == -1) {
        page.clickedDecisions.push(bh.input.event);
      }
      //appendnew_next_sd_0hx3V0i3q7h2X7ra
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0hx3V0i3q7h2X7ra');
    }
  }

  sd_TfMSOu4vLclw0zyG(bh) {
    try {
      const page = this.page;
      page.autoRecommendationVersion = page.autoRecommendationVersion + 0.1;
      page.autoRecommendationVersion =
        Math.round(page.autoRecommendationVersion * 10) / 10;

      page.versionsList.unshift(page.autoRecommendationVersion);

      //appendnew_next_sd_TfMSOu4vLclw0zyG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TfMSOu4vLclw0zyG');
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
  //appendnew_flow_recommendationComponent_Catch
}
