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
  selector: 'bh-address_details',
  templateUrl: './address_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class address_detailsComponent {
  @Input('data')
  public data: any = undefined;
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
      this.sd_kDxqXoPN77xMtFjl(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_kDxqXoPN77xMtFjl(bh) {
    try {
      bh = this.labelsMapper(bh);
      //appendnew_next_sd_kDxqXoPN77xMtFjl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kDxqXoPN77xMtFjl');
    }
  }

  getAddressKeys(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { detailKeys: undefined };
      bh = this.sd_1vNEIQDcEu382e0I(bh);
      //appendnew_next_getAddressKeys
      return bh.local.detailKeys;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lr1sYSkVcAoFllWC');
    }
  }

  //appendnew_flow_address_detailsComponent_start

  labelsMapper(bh) {
    try {
      const page = this.page;
      page.labels = {
        address: {
          get label() {
            return page.locales.keys.address;
          },
        },
        ward: {
          get label() {
            return page.locales.keys.ward;
          },
        },
        district: {
          get label() {
            return page.locales.keys.district;
          },
        },
        city: {
          get label() {
            return page.locales.keys.city;
          },
        },
        email: {
          get label() {
            return page.locales.keys.email;
          },
        },
        telephone: {
          get label() {
            return page.locales.keys.telephone;
          },
        },
        mobile: {
          get label() {
            return page.locales.keys.mobile;
          },
        },
        bankAccount: {
          get label() {
            return page.locales.keys.bankAccount;
          },
        },
        bankAccountName: {
          get label() {
            return page.locales.keys.bankAccountName;
          },
        },
        bankName: {
          get label() {
            return page.locales.keys.bankName;
          },
        },
        bankBranch: {
          get label() {
            return page.locales.keys.bankBranch;
          },
        },
        bankAddress: {
          get label() {
            return page.locales.keys.bankAddress;
          },
        },
        residentialAdd: {
          get label() {
            return page.locales.keys.residentialAdd;
          },
        },
      };

      //appendnew_next_labelsMapper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h8TqwcxdVJEtz4JW');
    }
  }

  sd_1vNEIQDcEu382e0I(bh) {
    try {
      const page = this.page;
      bh.local.detailKeys = Object.keys(this.data.details);
      //appendnew_next_sd_1vNEIQDcEu382e0I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1vNEIQDcEu382e0I');
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
  //appendnew_flow_address_detailsComponent_Catch
}
