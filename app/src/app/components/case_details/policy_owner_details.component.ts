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
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-policy_owner_details',
  templateUrl: './policy_owner_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class policy_owner_detailsComponent {
  @Input('policyOwnerDetails')
  public policyOwnerDetails: any = undefined;
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
      this.sd_t1Meqb3F0AyeBv5a(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_t1Meqb3F0AyeBv5a(bh) {
    try {
      bh = this.sd_mfriqHrOnAWo92Dz(bh);
      //appendnew_next_sd_t1Meqb3F0AyeBv5a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t1Meqb3F0AyeBv5a');
    }
  }

  //appendnew_flow_policy_owner_detailsComponent_start

  sd_mfriqHrOnAWo92Dz(bh) {
    try {
      this.page.residentialAddData = undefined;
      this.page.companyAddData = undefined;
      this.page.currentAddress = undefined;
      this.page.bankAccDetails = undefined;
      this.page.personalDetails = undefined;
      bh = this.sd_sLkINxTQEmhyIzrb(bh);
      //appendnew_next_sd_mfriqHrOnAWo92Dz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfriqHrOnAWo92Dz');
    }
  }

  sd_sLkINxTQEmhyIzrb(bh) {
    try {
      const page = this.page; // page.personalDetails = {
      //     viewTitle: 'Residential Address',
      //     viewIconName: 'assets/Web/CaseDetails/home.svg',
      //     details: this.policyOwnerDetails.PersonalDetails
      // };
      page.residentialAddData = {
        viewTitle: 'Residential Address',
        viewIconName: 'assets/Web/CaseDetails/home.svg',
        details: this.policyOwnerDetails.residentialAddress,
      };
      page.companyAddData = {
        viewTitle: 'Company Name and Business Address',
        viewIconName: 'assets/Web/CaseDetails/office.svg',
        details: this.policyOwnerDetails.workAddress,
      };
      page.currentAddress = {
        viewTitle: 'Current Address',
        viewIconName: 'assets/Web/CaseDetails/location.svg',
        details: this.policyOwnerDetails.currentAddress,
      };
      page.bankAccDetails = {
        viewTitle: 'Registration of Auto Bank Transfer',
        viewIconName: 'assets/Web/CaseDetails/substitution.svg',
        details: this.policyOwnerDetails.bankDetails,
      };
      //appendnew_next_sd_sLkINxTQEmhyIzrb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sLkINxTQEmhyIzrb');
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
  //appendnew_flow_policy_owner_detailsComponent_Catch
}
