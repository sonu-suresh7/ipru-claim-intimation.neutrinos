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
import { cache } from 'app/sd-services/cache'; //_splitter_
import { appSettings } from 'app/sd-services/appSettings'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-base_layout',
  templateUrl: './base_layout.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class base_layoutComponent {
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
      this.sd_E9kGkxM3w2NZJHoU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    this.page._pubsub_sd_ODL6OuLS3u3mdDzE = bh.system.pubsubService.$sub(
      'open-rsn',
      async (data) => this.listenForRsnOpenEvent(data)
    );
    this.page._pubsub_sd_MPCxIGYQdiiw5JpJ = bh.system.pubsubService.$sub(
      'close-rsn',
      async (data) => this.listenForRsnCloseEvent(data)
    );

    this.page._pubsub_sd_pUKqYDOJlF2KdZ76 = bh.system.pubsubService.$sub(
      'update-app-logo-url',
      async (data) => this.sd_pUKqYDOJlF2KdZ76(data)
    );
    //append_listeners
  }

  sd_E9kGkxM3w2NZJHoU(bh) {
    try {
      bh = this.setCacheVars(bh);
      //appendnew_next_sd_E9kGkxM3w2NZJHoU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E9kGkxM3w2NZJHoU');
    }
  }

  listenForRsnOpenEvent(bh) {
    try {
      bh = this.sd_qMFeMXEARbQlQB1D(bh);
      //appendnew_next_listenForRsnOpenEvent
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ODL6OuLS3u3mdDzE');
    }
  }

  listenForRsnCloseEvent(bh) {
    try {
      bh = this.sd_z2GYYLlDwvgGZ8Sx(bh);
      //appendnew_next_listenForRsnCloseEvent
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MPCxIGYQdiiw5JpJ');
    }
  }

  sidenavclosed(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ILd5poPHeF1Z7VS2(bh);
      //appendnew_next_sidenavclosed
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sG1y936HmblsdLQo');
    }
  }

  sd_pUKqYDOJlF2KdZ76(bh) {
    try {
      bh = this.sd_xeWbMt7qkptMouHF(bh);
      //appendnew_next_sd_pUKqYDOJlF2KdZ76
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pUKqYDOJlF2KdZ76');
    }
  }

  //appendnew_flow_base_layoutComponent_start

  setCacheVars(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      bh.local.appSettings = cacheInstance['appSettings'];
      this.page.languages = cacheInstance['languages'];
      bh = this.sd_eZrOlYwUhQOftwRo(bh);
      //appendnew_next_setCacheVars
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jhQUuUvxStJlXPlz');
    }
  }

  sd_eZrOlYwUhQOftwRo(bh) {
    try {
      const page = this.page; // page.logo = () => page.system.environment.properties.ssdBaseUrl + '/app-settings/logo?' + Date.now()

      page.logoSrc =
        page.system.environment.properties.ssdBaseUrl + '/app-settings/logo';
      bh = this.sd_wg7JqyYn32qyXfjk(bh);
      //appendnew_next_sd_eZrOlYwUhQOftwRo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eZrOlYwUhQOftwRo');
    }
  }

  async sd_wg7JqyYn32qyXfjk(bh) {
    try {
      const appSettingsInstance: appSettings =
        this.__page_injector__.get(appSettings);

      let outputVariables = await appSettingsInstance.changeAppUIColors(
        bh.local.appSettings.ui
      );

      //appendnew_next_sd_wg7JqyYn32qyXfjk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wg7JqyYn32qyXfjk');
    }
  }

  sd_qMFeMXEARbQlQB1D(bh) {
    try {
      this.page.rsnOpen = true;
      this.page.rsnComp = bh.local.rsnComponent;
      //appendnew_next_sd_qMFeMXEARbQlQB1D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qMFeMXEARbQlQB1D');
    }
  }

  sd_z2GYYLlDwvgGZ8Sx(bh) {
    try {
      this.page.rsnOpen = false;
      this.page.rsnComp = null;
      //appendnew_next_sd_z2GYYLlDwvgGZ8Sx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z2GYYLlDwvgGZ8Sx');
    }
  }

  sd_ILd5poPHeF1Z7VS2(bh) {
    try {
      const page = this.page;
      bh.local.isTrafficLight = false;

      if (page.rsnComp === 'TRAFFIC_LIGHTS') {
        bh.local.isTrafficLight = true;
      }

      page.rsnOpen = false;
      page.rsnComp = '';
      bh = this.sd_dQtPZFJEdLVlsqTJ(bh);
      //appendnew_next_sd_ILd5poPHeF1Z7VS2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ILd5poPHeF1Z7VS2');
    }
  }

  sd_dQtPZFJEdLVlsqTJ(bh) {
    try {
      bh.system.pubsubService.$pub('rsn-traffic-light-close', bh);
      //appendnew_next_sd_dQtPZFJEdLVlsqTJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dQtPZFJEdLVlsqTJ');
    }
  }

  sd_xeWbMt7qkptMouHF(bh) {
    try {
      const page = this.page; // page.logo = () => page.system.environment.properties.ssdBaseUrl + '/app-settings/logo?' + Date.now()

      page.logoSrc =
        page.system.environment.properties.ssdBaseUrl +
        '/app-settings/logo?' +
        Date.now();
      //appendnew_next_sd_xeWbMt7qkptMouHF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xeWbMt7qkptMouHF');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const sub = this.page._pubsub_sd_ODL6OuLS3u3mdDzE;
      if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    }
    {
      const sub = this.page._pubsub_sd_MPCxIGYQdiiw5JpJ;
      if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    }
    {
      const sub = this.page._pubsub_sd_pUKqYDOJlF2KdZ76;
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
  //appendnew_flow_base_layoutComponent_Catch
}
