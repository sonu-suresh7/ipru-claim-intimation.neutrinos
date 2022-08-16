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
import { MatHorizontalStepper } from '@angular/material/stepper'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-alluicomponents',
  templateUrl: './alluicomponents.template.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
    //appendnew_element_providers
  ],
})
export class alluicomponentsComponent implements AfterViewInit {
  @ViewChild(MatHorizontalStepper)
  public MatHorizontalStepper: any = null;
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
      this.init(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  init(bh) {
    try {
      bh = this.sd_Y4o0dqf1LYO8lsF3(bh);
      //appendnew_next_init
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h5pYZlWxs7XiQcFh');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_bM6d5aGFmyxkf1ft(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gnNuhYmXFt3P4kw1');
    }
  }

  //appendnew_flow_alluicomponentsComponent_start

  sd_Y4o0dqf1LYO8lsF3(bh) {
    try {
      bh = this.sd_XHNNhjcqlV93T2kd(bh);
      //appendnew_next_sd_Y4o0dqf1LYO8lsF3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y4o0dqf1LYO8lsF3');
    }
  }

  sd_XHNNhjcqlV93T2kd(bh) {
    try {
      this.page.abc = ['asdasd', 'adsdasd', 'asdadsads', 'hghghg'];
      //appendnew_next_sd_XHNNhjcqlV93T2kd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XHNNhjcqlV93T2kd');
    }
  }

  sd_bM6d5aGFmyxkf1ft(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatHorizontalStepper: this.MatHorizontalStepper,
      });
      bh = this.sd_iWepxyaKRIJ9kOxz(bh);
      //appendnew_next_sd_bM6d5aGFmyxkf1ft
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bM6d5aGFmyxkf1ft');
    }
  }

  sd_iWepxyaKRIJ9kOxz(bh) {
    try {
      const page = this.page;
      bh.pageViews.MatHorizontalStepper._getIndicatorType = () => 'number';

      //appendnew_next_sd_iWepxyaKRIJ9kOxz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iWepxyaKRIJ9kOxz');
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
  //appendnew_flow_alluicomponentsComponent_Catch
}
