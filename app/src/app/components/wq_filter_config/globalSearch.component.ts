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
import { FormBuilder, Validators, FormControl } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-globalSearch',
  templateUrl: './globalSearch.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class globalSearchComponent {
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
      this.sd_9qZlzzwGDFoO0Anj(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9qZlzzwGDFoO0Anj(bh) {
    try {
      bh = this.importNgForm(bh);
      //appendnew_next_sd_9qZlzzwGDFoO0Anj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9qZlzzwGDFoO0Anj');
    }
  }

  //appendnew_flow_globalSearchComponent_start

  importNgForm(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.labelsConf(bh);
      //appendnew_next_importNgForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BX75z4isKtpt4zg1');
    }
  }

  labelsConf(bh) {
    try {
      const page = this.page;
      page.fields = [
        {
          name: 'applicationNumber',
          get label() {
            return page.locales.keys.applicationNumber;
          },
        },
        {
          name: 'createdOn',
          get label() {
            return page.locales.keys.createdOn;
          },
        },
        {
          name: 'phoneNumber',
          get label() {
            return page.locales.keys.phno;
          },
        },
        {
          name: 'customerName',
          get label() {
            return page.locales.keys.customerName;
          },
        },
        {
          name: 'clientId',
          get label() {
            return page.locales.keys.clientId;
          },
        },
      ];
      //appendnew_next_labelsConf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YkYkCIUGOULTjRpX');
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
  //appendnew_flow_globalSearchComponent_Catch
}
