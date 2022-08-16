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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-third_party_info',
  templateUrl: './third_party_info.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class third_party_infoComponent {
  @Input('thirdPartyDetails')
  public thirdPartyDetails: any = undefined;
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
      this.sd_wDshvlheyZtLeynz(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wDshvlheyZtLeynz(bh) {
    try {
      bh = this.sd_rIqungBK5M704gLH(bh);
      //appendnew_next_sd_wDshvlheyZtLeynz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wDshvlheyZtLeynz');
    }
  }

  //appendnew_flow_third_party_infoComponent_start

  sd_rIqungBK5M704gLH(bh) {
    try {
      bh = this.labelsMapper(bh);
      //appendnew_next_sd_rIqungBK5M704gLH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rIqungBK5M704gLH');
    }
  }

  labelsMapper(bh) {
    try {
      const page = this.page;
      page.labels = {
        answer: {
          get label() {
            return page.locales.keys.answer;
          },
        },
      };

      //appendnew_next_labelsMapper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ymhF5sbjEM12a35P');
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
  //appendnew_flow_third_party_infoComponent_Catch
}
