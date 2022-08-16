/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-policies',
  templateUrl: './policies.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class policiesComponent implements OnChanges {
  @Input('policies')
  public policies: any = [];
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
      this.sd_Pz93r0VbVK4sCZIw(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Pz93r0VbVK4sCZIw(bh) {
    try {
      bh = this.sd_Gg862CbSmkvZSd07(bh);
      //appendnew_next_sd_Pz93r0VbVK4sCZIw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pz93r0VbVK4sCZIw');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.sd_I0WsN90ogdBfCidH(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zvwr5dPF0F4Q0ag5');
    }
  }

  //appendnew_flow_policiesComponent_start

  sd_Gg862CbSmkvZSd07(bh) {
    try {
      this.page.policiesArr = [];
      //appendnew_next_sd_Gg862CbSmkvZSd07
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gg862CbSmkvZSd07');
    }
  }

  sd_I0WsN90ogdBfCidH(bh) {
    try {
      const page = this.page;
      if (this.policies) {
        page.policiesArr = this.policies;
        // let dataSource = new MatTableDataSource(this.policies);
        // if (dataSource && dataSource.data) {
        //     page.policiesArr = dataSource.data;
        // }
        // console.log('policies array in child---', page.policiesArr);
      }
      //appendnew_next_sd_I0WsN90ogdBfCidH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I0WsN90ogdBfCidH');
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
  //appendnew_flow_policiesComponent_Catch
}
