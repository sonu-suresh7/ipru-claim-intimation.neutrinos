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
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-other_details',
  templateUrl: './other_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class other_detailsComponent {
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
      this.sd_P6U58HdOEiFWbvCD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_P6U58HdOEiFWbvCD(bh) {
    try {
      bh = this.sd_27to02xbLg08DdEU(bh);
      //appendnew_next_sd_P6U58HdOEiFWbvCD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P6U58HdOEiFWbvCD');
    }
  }

  getOtherDetailsKeys(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { detailKeys: undefined };
      bh = this.sd_ThthEbq819VX5Ww4(bh);
      //appendnew_next_getOtherDetailsKeys
      return bh.local.detailKeys;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nhIV0aqJSkH0oSfw');
    }
  }

  //appendnew_flow_other_detailsComponent_start

  sd_27to02xbLg08DdEU(bh) {
    try {
      this.page.otherDetails = undefined;
      bh = this.sd_eA4CBw28orc480eM(bh);
      //appendnew_next_sd_27to02xbLg08DdEU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_27to02xbLg08DdEU');
    }
  }

  sd_eA4CBw28orc480eM(bh) {
    try {
      const page = this.page;
      page.otherDetails = {
        occupation: 'Adminstartion-Accountant',
        income: '100000000',
        mailingAddress: 'Residential Address of Policy Owner',
      };
      bh = this.labelsMapper(bh);
      //appendnew_next_sd_eA4CBw28orc480eM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eA4CBw28orc480eM');
    }
  }

  labelsMapper(bh) {
    try {
      const page = this.page;
      page.labels = {
        occupation: {
          get label() {
            return page.locales.keys.occupation;
          },
        },
        income: {
          get label() {
            return page.locales.keys.income;
          },
        },
        mailingAddress: {
          get label() {
            return page.locales.keys.mailingAddress;
          },
        },
      };
      //appendnew_next_labelsMapper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Iz3xrU1fh9gDB6io');
    }
  }

  sd_ThthEbq819VX5Ww4(bh) {
    try {
      const page = this.page;
      bh.local.detailKeys = Object.keys(page.otherDetails);
      //appendnew_next_sd_ThthEbq819VX5Ww4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ThthEbq819VX5Ww4');
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
  //appendnew_flow_other_detailsComponent_Catch
}
