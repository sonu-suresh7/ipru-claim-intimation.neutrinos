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
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { trafficLightService } from 'app/sd-services/trafficLightService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-traffic_lights_stats',
  templateUrl: './traffic_lights_stats.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class traffic_lights_statsComponent {
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
      this.sd_IFwAhYgOtED6rhkE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    this.page._pubsub_sd_yuhTzGmesyqldrPv = bh.system.pubsubService.$sub(
      'rsn-traffic-light-close',
      async (data) => this.sd_yuhTzGmesyqldrPv(data)
    );
    //append_listeners
  }

  sd_IFwAhYgOtED6rhkE(bh) {
    try {
      bh = this.sd_tiZssb2XS0ekSiTn(bh);
      //appendnew_next_sd_IFwAhYgOtED6rhkE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IFwAhYgOtED6rhkE');
    }
  }

  sd_yuhTzGmesyqldrPv(bh) {
    try {
      bh = this.sd_XUXqtoe317DDY9s1(bh);
      //appendnew_next_sd_yuhTzGmesyqldrPv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yuhTzGmesyqldrPv');
    }
  }

  //appendnew_flow_traffic_lights_statsComponent_start

  sd_tiZssb2XS0ekSiTn(bh) {
    try {
      bh = this.sd_S2TpEsgKnZP9Zs06(bh);
      //appendnew_next_sd_tiZssb2XS0ekSiTn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tiZssb2XS0ekSiTn');
    }
  }

  async sd_S2TpEsgKnZP9Zs06(bh) {
    try {
      const trafficLightServiceInstance: trafficLightService =
        this.__page_injector__.get(trafficLightService);

      let outputVariables =
        await trafficLightServiceInstance.getAllLightsStats();
      bh.result = outputVariables.local.result;

      bh = this.sd_HR5BPbL2C2aaNblZ(bh);
      //appendnew_next_sd_S2TpEsgKnZP9Zs06
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_S2TpEsgKnZP9Zs06');
    }
  }

  sd_HR5BPbL2C2aaNblZ(bh) {
    try {
      const page = this.page;
      console.log(bh.result);
      page.statuses = bh.result[0];
      //appendnew_next_sd_HR5BPbL2C2aaNblZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HR5BPbL2C2aaNblZ');
    }
  }

  sd_XUXqtoe317DDY9s1(bh) {
    try {
      const page = this.page;
      console.log('isTrafficLight', bh.local.isTrafficLight);
      bh = this.sd_BShyvU3yt9HJAHXm(bh);
      //appendnew_next_sd_XUXqtoe317DDY9s1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XUXqtoe317DDY9s1');
    }
  }

  sd_BShyvU3yt9HJAHXm(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.isTrafficLight,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_S2TpEsgKnZP9Zs06(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BShyvU3yt9HJAHXm');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const sub = this.page._pubsub_sd_yuhTzGmesyqldrPv;
      if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    }
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
  //appendnew_flow_traffic_lights_statsComponent_Catch
}
