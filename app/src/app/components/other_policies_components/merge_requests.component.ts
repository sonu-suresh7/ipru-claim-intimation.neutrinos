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
  selector: 'bh-merge_requests',
  templateUrl: './merge_requests.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class merge_requestsComponent {
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
      this.sd_zBw2Bh7dZO20xWf7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zBw2Bh7dZO20xWf7(bh) {
    try {
      bh = this.sd_18vorudaruoYaSfs(bh);
      //appendnew_next_sd_zBw2Bh7dZO20xWf7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zBw2Bh7dZO20xWf7');
    }
  }

  //appendnew_flow_merge_requestsComponent_start

  sd_18vorudaruoYaSfs(bh) {
    try {
      this.page.mergeRequestsArray = [];
      bh = this.sd_HEoJ8820xUU9gF6n(bh);
      //appendnew_next_sd_18vorudaruoYaSfs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_18vorudaruoYaSfs');
    }
  }

  sd_HEoJ8820xUU9gF6n(bh) {
    try {
      const page = this.page;
      page.mergeRequestsArray = new MatTableDataSource([
        // {
        //     dateTime: new Date().toLocaleString(),
        //     requester: "Mira Curtis",
        //     lifeInsured: "Livia Ekstrom Bothman",
        //     clientId: "1231234,1231244",
        //     status: "Pending",
        // },
        // {
        //     dateTime: new Date().toLocaleString(),
        //     requester: "Mira Curtis",
        //     lifeInsured: "Livia Ekstrom Bothman",
        //     clientId: "1231234",
        //     status: "Pending",
        // },
        // {
        //     dateTime: new Date().toLocaleString(),
        //     requester: "Mira Curtis",
        //     lifeInsured: "Livia Ekstrom Bothman",
        //     clientId: "1231234,1231244,123123",
        //     status: "Pending",
        // }
      ]);
      // console.log('lengthh---', page.mergeRequestsArray);
      //appendnew_next_sd_HEoJ8820xUU9gF6n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HEoJ8820xUU9gF6n');
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
  //appendnew_flow_merge_requestsComponent_Catch
}
