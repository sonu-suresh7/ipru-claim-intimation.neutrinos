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
import { cache } from 'app/sd-services/cache'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-health_information',
  templateUrl: './health_information.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class health_informationComponent {
  @Input('healthInfo')
  public healthInfo: any = undefined;
  @Input('personalDetails')
  public personalDetails: any = undefined;
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
      this.sd_kX7NOfuBLYBFw58z(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_kX7NOfuBLYBFw58z(bh) {
    try {
      bh = this.sd_Y0m69LezCmXd3HHr(bh);
      //appendnew_next_sd_kX7NOfuBLYBFw58z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kX7NOfuBLYBFw58z');
    }
  }

  getHealthInfo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { res: undefined };
      bh = this.sd_ciArwEhnLPFm9JXk(bh);
      //appendnew_next_getHealthInfo
      return bh.local.res;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fwx4CwjRCnj9lV52');
    }
  }

  getKeys(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { keys: undefined };
      bh = this.sd_bSxrIJYgYJwPHALC(bh);
      //appendnew_next_getKeys
      return bh.local.keys;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HK9O8kX61oXBI7eq');
    }
  }

  editValue(
    item: any = undefined,
    index: any = undefined,
    event: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item: item, index: index, event: event };
      bh.local = {};
      bh = this.sd_SqtcdjIiAAYsPysA(bh);
      //appendnew_next_editValue
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TEcEZO33Tw5IBb3n');
    }
  }

  //appendnew_flow_health_informationComponent_start

  sd_Y0m69LezCmXd3HHr(bh) {
    try {
      this.page.highLighted = true;
      this.page.highLightedDetails = undefined;
      this.page.info = undefined;
      this.page.healthInfoData = [];
      bh = this.sd_unmUrgXfkugNZJX2(bh);
      //appendnew_next_sd_Y0m69LezCmXd3HHr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y0m69LezCmXd3HHr');
    }
  }

  sd_unmUrgXfkugNZJX2(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.labelsMapper(bh);
      //appendnew_next_sd_unmUrgXfkugNZJX2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_unmUrgXfkugNZJX2');
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
        height: {
          get label() {
            return page.locales.keys.height;
          },
        },
        weight: {
          get label() {
            return page.locales.keys.weight;
          },
        },
        bmi: {
          get label() {
            return page.locales.keys.bmi;
          },
        },
        weightAtBirth: {
          get label() {
            return page.locales.keys.weightAtBirth;
          },
        },
      };

      bh = this.sd_fQx6ujXY6rjB9aXh(bh);
      //appendnew_next_labelsMapper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eM3uTQJhYCmkUjzv');
    }
  }

  sd_fQx6ujXY6rjB9aXh(bh) {
    try {
      const page = this.page;
      page.healthInfoData = this.healthInfo;

      this.healthInfo.forEach((obj, index) => {
        if (obj.highlight === false) {
          page.healthInfoData[index]['color'] = 'green';
        } else {
          page.healthInfoData[index]['color'] = 'red';
        }
      });
      page.highLightedDetails = page.healthInfoData.filter(
        (obj) => obj.highlight === true
      );

      page.info = {
        height: this.personalDetails.height || '-',
        weight: this.personalDetails.weight || '-',
        bmi: this.personalDetails.bmi || '-',
        weightAtBirth: this.personalDetails.weightAtBirth || '-',
      };

      page.healthInfo = [
        {
          fieldName: this.personalDetails.height || '-',
          label: page.labels.height.label,
          showLabel: true,
        },
        {
          fieldName: this.personalDetails.weight || '-',
          label: page.labels.weight.label,
          showLabel: true,
        },
      ];

      page.otherHealthInfo = [
        {
          fieldName: this.personalDetails.bmi || '-',
          label: page.labels.bmi.label,
        },
        {
          fieldName: this.personalDetails.weightAtBirth || '-',
          label: page.labels.weightAtBirth.label,
        },
      ];
      //appendnew_next_sd_fQx6ujXY6rjB9aXh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fQx6ujXY6rjB9aXh');
    }
  }

  sd_ciArwEhnLPFm9JXk(bh) {
    try {
      const page = this.page;
      if (page.highLighted) {
        bh.local.res = page.highLightedDetails;
      } else {
        bh.local.res = this.healthInfo;
      }
      //appendnew_next_sd_ciArwEhnLPFm9JXk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ciArwEhnLPFm9JXk');
    }
  }

  sd_bSxrIJYgYJwPHALC(bh) {
    try {
      const page = this.page;
      bh.local.keys = Object.keys(page.info);
      //appendnew_next_sd_bSxrIJYgYJwPHALC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bSxrIJYgYJwPHALC');
    }
  }

  sd_SqtcdjIiAAYsPysA(bh) {
    try {
      const page = this.page;
      page.healthInfo[bh.input.index].showLabel =
        !page.healthInfo[bh.input.index].showLabel;

      bh.local.isChangeDetected = false;

      // console.log('checkedOut', page.checkedOut);
      console.log('bh.input.item', bh.input.item);
      console.log('bh.input.event', bh.input.event);

      if (bh.input.event?.type == 'blur') {
        if (
          bh.input.item?.label == 'Weight' &&
          page.checkedOut.case?.caseDetails?.primaryLife?.PersonalDetails
            ?.weight
        ) {
          page.checkedOut.case.caseDetails.primaryLife.PersonalDetails.weight =
            bh.input.item?.fieldName;
          bh.local.isChangeDetected = true;
        } else if (
          bh.input.item?.label == 'Height' &&
          page.checkedOut.case?.caseDetails?.primaryLife?.PersonalDetails
            ?.height
        ) {
          page.checkedOut.case.caseDetails.primaryLife.PersonalDetails.height =
            bh.input.item?.fieldName;
          bh.local.isChangeDetected = true;
        }
      }

      if (bh.local.isChangeDetected) {
        let weight =
          page.checkedOut.case.caseDetails.primaryLife.PersonalDetails.weight;
        let height =
          page.checkedOut.case.caseDetails.primaryLife.PersonalDetails.height;
        let bmi = (weight / Math.pow(height, 2)).toFixed(1);
        page.checkedOut.case.caseDetails.primaryLife.PersonalDetails.bmi = bmi;
        if (page.otherHealthInfo.length) {
          page.otherHealthInfo[0].fieldName = bmi;
        }
      }
      bh = this.sd_fSVexUw2kIiGxSwo(bh);
      //appendnew_next_sd_SqtcdjIiAAYsPysA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SqtcdjIiAAYsPysA');
    }
  }

  sd_fSVexUw2kIiGxSwo(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isChangeDetected,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_17j3JVYN406SG9H9(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fSVexUw2kIiGxSwo');
    }
  }

  sd_17j3JVYN406SG9H9(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);

      //appendnew_next_sd_17j3JVYN406SG9H9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_17j3JVYN406SG9H9');
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
  //appendnew_flow_health_informationComponent_Catch
}
