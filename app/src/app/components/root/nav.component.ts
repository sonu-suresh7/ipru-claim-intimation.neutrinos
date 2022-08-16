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
import { cache } from 'app/sd-services/cache'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { confirmation_dialogComponent } from '../other_policies_components/confirmation_dialog.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-nav',
  templateUrl: './nav.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class navComponent {
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
      this.sd_o15FwDkH9jF2cdq8(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_o15FwDkH9jF2cdq8(bh) {
    try {
      bh = this.getNavMenuFromCache(bh);
      //appendnew_next_sd_o15FwDkH9jF2cdq8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o15FwDkH9jF2cdq8');
    }
  }

  confirmAndLogout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_W1DcOcIjY3sbhxSS(bh);
      //appendnew_next_confirmAndLogout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KqODz7b4mvsISt4l');
    }
  }

  //appendnew_flow_navComponent_start

  getNavMenuFromCache(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.menu = cacheInstance['navMenu'];
      //appendnew_next_getNavMenuFromCache
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y073NJBTd6qAssUB');
    }
  }

  sd_W1DcOcIjY3sbhxSS(bh) {
    try {
      const page = this.page;
      bh.local.data = {
        title: 'Confirmation',
        message: 'Are you sure you want to log out of the app?',
        option1: {
          title: 'No',
          value: false,
        },
        option2: {
          title: 'Yes',
          value: true,
        },
      };
      bh = this.sd_VUtmkJyFdYLc6HKk(bh);
      //appendnew_next_sd_W1DcOcIjY3sbhxSS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W1DcOcIjY3sbhxSS');
    }
  }

  sd_VUtmkJyFdYLc6HKk(bh) {
    try {
      const confirmation_dialogDialog = this.__page_injector__.get(MatDialog);
      const confirmation_dialogDialogRef = confirmation_dialogDialog.open(
        confirmation_dialogComponent,
        { data: bh.local.data, height: '150px', width: '500px' }
      );
      confirmation_dialogDialogRef.afterClosed().subscribe((event) => {
        bh.local.res = event;
        this.sd_Lq6rzp4uZoPCOViG(bh);

        //appendnew_next_sd_VUtmkJyFdYLc6HKk;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VUtmkJyFdYLc6HKk');
    }
  }

  sd_Lq6rzp4uZoPCOViG(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.res,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_PcJLPqe6yMDfQseA(bh);
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
      return this.errorHandler(bh, e, 'sd_Lq6rzp4uZoPCOViG');
    }
  }

  sd_PcJLPqe6yMDfQseA(bh) {
    try {
      const page = this.page;
      page.system.oauthService.logout();
      //appendnew_next_sd_PcJLPqe6yMDfQseA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PcJLPqe6yMDfQseA');
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
  //appendnew_flow_navComponent_Catch
}
