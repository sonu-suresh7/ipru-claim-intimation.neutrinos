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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-personal_details',
  templateUrl: './personal_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class personal_detailsComponent {
  @Input('personalDetails')
  public personalDetails: any = undefined;
  @Input('otherDetailsData')
  public otherDetailsData: any = undefined;
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
      this.sd_kSmKDBQ6pubLBP2l(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_kSmKDBQ6pubLBP2l(bh) {
    try {
      bh = this.sd_yfPvbdqnGM8V1zM8(bh);
      //appendnew_next_sd_kSmKDBQ6pubLBP2l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kSmKDBQ6pubLBP2l');
    }
  }

  //appendnew_flow_personal_detailsComponent_start

  sd_yfPvbdqnGM8V1zM8(bh) {
    try {
      this.page.otherDetailsData = undefined;
      this.page.detailsTitle = undefined;
      bh = this.labelsMapper(bh);
      //appendnew_next_sd_yfPvbdqnGM8V1zM8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yfPvbdqnGM8V1zM8');
    }
  }

  labelsMapper(bh) {
    try {
      const page = this.page;
      page.labels = {
        fullName: {
          get label() {
            return page.locales.keys.fullName;
          },
        },
        sex: {
          get label() {
            return page.locales.keys.sex;
          },
        },
        idNumber: {
          get label() {
            return page.locales.keys.idNumber;
          },
        },
        idIssueDate: {
          get label() {
            return page.locales.keys.idIssueDate;
          },
        },
        idIssuePlace: {
          get label() {
            return page.locales.keys.idIssuePlace;
          },
        },
        dob: {
          get label() {
            return page.locales.keys.dob;
          },
        },
        age: {
          get label() {
            return page.locales.keys.age;
          },
        },
        palceOfBirth: {
          get label() {
            return page.locales.keys.palceOfBirth;
          },
        },
        nationality: {
          get label() {
            return page.locales.keys.nationality;
          },
        },
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
        relationship: {
          get label() {
            return page.locales.keys.relationship;
          },
        },
      };

      bh = this.sd_nLemwNqjd7MH9mZ9(bh);
      //appendnew_next_labelsMapper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gtyAIvz70Yc9070h');
    }
  }

  sd_nLemwNqjd7MH9mZ9(bh) {
    try {
      const page = this.page; // const deleteKeys = ['height', 'weight', 'bmi', 'weightAtBirth'];
      const deleteKeys = [
        'idIssueDate',
        'idIssuePlace',
        'palceOfBirth',
        'nationality',
      ];
      page.detailKeys = Object.keys(this.personalDetails).filter(
        (k) => !deleteKeys.includes(k)
      );

      //appendnew_next_sd_nLemwNqjd7MH9mZ9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nLemwNqjd7MH9mZ9');
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
  //appendnew_flow_personal_detailsComponent_Catch
}
