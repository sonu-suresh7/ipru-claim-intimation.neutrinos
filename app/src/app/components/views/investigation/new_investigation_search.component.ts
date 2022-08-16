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
import { investigation } from 'app/sd-services/investigation'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-new_investigation_search',
  templateUrl: './new_investigation_search.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class new_investigation_searchComponent {
  @Output('policy_details')
  public policy_details: any = new EventEmitter<any>();
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
      this.sd_jbDFHgAnPub65ArQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jbDFHgAnPub65ArQ(bh) {
    try {
      bh = this.sd_Vg0HlE3AWkyQifQA(bh);
      //appendnew_next_sd_jbDFHgAnPub65ArQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jbDFHgAnPub65ArQ');
    }
  }

  searchPolicy(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_CoiUkwfXOonN91cy(bh);
      //appendnew_next_searchPolicy
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vTtZ9WTnKhS03pRo');
    }
  }

  //appendnew_flow_new_investigation_searchComponent_start

  sd_Vg0HlE3AWkyQifQA(bh) {
    try {
      this.page.policy_details = {};
      bh = this.getUserRole(bh);
      //appendnew_next_sd_Vg0HlE3AWkyQifQA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vg0HlE3AWkyQifQA');
    }
  }

  getUserRole(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.USER_ROLE = cacheInstance['loggedInRole'];
      //appendnew_next_getUserRole
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8JuUi4AqaXCbXHdL');
    }
  }

  sd_CoiUkwfXOonN91cy(bh) {
    try {
      const page = this.page;
      console.log(bh.input.event.value);
      bh.policy_number = bh.input.event.value.trim();
      if (!bh.policy_number) {
        return;
      }
      bh = this.sd_JI0HE77aFKlsh270(bh);
      //appendnew_next_sd_CoiUkwfXOonN91cy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CoiUkwfXOonN91cy');
    }
  }

  async sd_JI0HE77aFKlsh270(bh) {
    try {
      const investigationInstance: investigation =
        this.__page_injector__.get(investigation);

      let outputVariables = await investigationInstance.searchPolicy(
        bh.policy_number
      );
      this.page.policy_details = outputVariables.local.policy_details;

      bh = this.sd_s0nQOxmJNNmjW4FH(bh);
      //appendnew_next_sd_JI0HE77aFKlsh270
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JI0HE77aFKlsh270');
    }
  }

  sd_s0nQOxmJNNmjW4FH(bh) {
    try {
      bh.pageOutput.policy_details.emit(this.page.policy_details);
      //appendnew_next_sd_s0nQOxmJNNmjW4FH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s0nQOxmJNNmjW4FH');
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
  //appendnew_flow_new_investigation_searchComponent_Catch
}
