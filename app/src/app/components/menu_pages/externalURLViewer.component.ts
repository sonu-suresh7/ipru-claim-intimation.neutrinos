/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  AfterViewInit,
  SecurityContext,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-externalURLViewer',
  templateUrl: './externalURLViewer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class externalURLViewerComponent {
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

  ngOnInit() {}

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    const routesd_5GLVT7fulZCPONvPInstance =
      this.__page_injector__.get(ActivatedRoute);
    this.page._route_sd_5GLVT7fulZCPONvP =
      routesd_5GLVT7fulZCPONvPInstance.paramMap.subscribe((event: any) => {
        let bh = this.sdService.__constructDefault({});
        bh.menuId = event.get('menuId');
        this.listenForMenuIdChange(bh);
      });
    //append_listeners
  }

  listenForMenuIdChange(bh) {
    try {
      bh = this.getNavMenuFromCache(bh);
      //appendnew_next_listenForMenuIdChange
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5GLVT7fulZCPONvP');
    }
  }

  //appendnew_flow_externalURLViewerComponent_start

  getNavMenuFromCache(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      bh.routeConfig = cacheInstance['navMenu'];
      bh = this.getInjectedSanitizer(bh);
      //appendnew_next_getNavMenuFromCache
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l4oIKnvVjIyEXTq9');
    }
  }

  getInjectedSanitizer(bh) {
    try {
      bh.sanitizer = this.__page_injector__.get(DomSanitizer);
      bh = this.getMenuAndUrl(bh);
      //appendnew_next_getInjectedSanitizer
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cErhMtHoODctTd1l');
    }
  }

  getMenuAndUrl(bh) {
    try {
      const page = this.page;
      page.menu = bh.routeConfig.find((c) => c.id === bh.menuId);
      page.unsafeUrl = bh.sanitizer.bypassSecurityTrustResourceUrl(
        page.menu.url
      );
      //appendnew_next_getMenuAndUrl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GbgOkfGlOHttl2qA');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const _route_sd_5GLVT7fulZCPONvP = this.page._route_sd_5GLVT7fulZCPONvP;
      if (
        _route_sd_5GLVT7fulZCPONvP &&
        typeof _route_sd_5GLVT7fulZCPONvP.unsubscribe === 'function'
      ) {
        _route_sd_5GLVT7fulZCPONvP.unsubscribe();
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
  //appendnew_flow_externalURLViewerComponent_Catch
}
