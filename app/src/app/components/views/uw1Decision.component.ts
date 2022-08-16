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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-uw1Decision',
  templateUrl: './uw1Decision.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class uw1DecisionComponent implements DoCheck {
  @Input('selectedRecommendation')
  public selectedRecommendation: any = undefined;
  @Output('decision')
  public decision: any = new EventEmitter<any>();
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
      this.sd_Xd9JXF6cWLRKoKSX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Xd9JXF6cWLRKoKSX(bh) {
    try {
      bh = this.sd_FVixrBZpKln7agb7(bh);
      //appendnew_next_sd_Xd9JXF6cWLRKoKSX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xd9JXF6cWLRKoKSX');
    }
  }

  ngDoCheck() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_ZFlHwPgPZWCSjOOs(bh);
      //appendnew_next_ngDoCheck
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_laaiec3AbOFAdWJL');
    }
  }

  //appendnew_flow_uw1DecisionComponent_start

  sd_FVixrBZpKln7agb7(bh) {
    try {
      this.page.comment = '';
      this.page.benefits = [];
      this.page.loggedInRole = undefined;
      this.page.uwLevel = undefined;
      bh = this.sd_9CY0DGlQtu7cCLSO(bh);
      //appendnew_next_sd_FVixrBZpKln7agb7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FVixrBZpKln7agb7');
    }
  }

  sd_9CY0DGlQtu7cCLSO(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      this.page.loggedInRole = cacheInstance['loggedInRole'];
      bh = this.sd_OpzK1KWAlrpK7Yv5(bh);
      //appendnew_next_sd_9CY0DGlQtu7cCLSO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9CY0DGlQtu7cCLSO');
    }
  }

  sd_OpzK1KWAlrpK7Yv5(bh) {
    try {
      const page = this.page;
      let autoRecommendation = page.checkedOut.case['autoRecommendation'];
      let decisions = page.checkedOut.case['decisions'];
      if (
        decisions &&
        decisions.length > 0 &&
        page.loggedInRole == decisions[decisions.length - 1].level
      ) {
        const obj = decisions[decisions.length - 1];
        page.benefits = obj.benefits;
        page.comment = obj.comments;
        page.uwLevel = obj.level;
      } else if (autoRecommendation) {
        autoRecommendation.forEach((ele) => {
          if (!page.benefits.includes(ele.benefit))
            page.benefits.push({
              type: ele.benefit,
              decision: '',
              em: '',
              flatRate: '',
              exclusion: '',
              clause: '',
              duration: '',
              remarks: '',
            });
        });
      }

      page.decision = {
        level: page.loggedInRole,
        decision: 'myDecision',
        comments: page.comment,
        user: page.system.oauthService.userInfo.username,
        datetime: new Date(),
        benefits: page.benefits || [],
      };

      //appendnew_next_sd_OpzK1KWAlrpK7Yv5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OpzK1KWAlrpK7Yv5');
    }
  }

  sd_ZFlHwPgPZWCSjOOs(bh) {
    try {
      const page = this.page; // console.log(page.comment);
      page.decision.comments = page.comment;
      // console.log(page.decision);
      bh = this.sd_cYBw3QOyVMOY0c7a(bh);
      //appendnew_next_sd_ZFlHwPgPZWCSjOOs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZFlHwPgPZWCSjOOs');
    }
  }

  sd_cYBw3QOyVMOY0c7a(bh) {
    try {
      bh.pageOutput.decision.emit(this.page.decision);
      //appendnew_next_sd_cYBw3QOyVMOY0c7a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cYBw3QOyVMOY0c7a');
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
  //appendnew_flow_uw1DecisionComponent_Catch
}
