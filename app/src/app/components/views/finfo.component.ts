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
import { MatTable, MatTableDataSource } from '@angular/material/table'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-finfo',
  templateUrl: './finfo.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class finfoComponent implements AfterViewInit {
  @ViewChild(MatSort, { read: MatSort })
  public MatSort: any = null;
  @ViewChild(MatTable)
  public MatTable: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      this.sd_ezjcUjUgISr3wDOu(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    this.page._pubsub_sd_Nn4mCcfU3EBFhEu6 = bh.system.pubsubService.$sub(
      'finfo_created',
      async (data) => this.finfo_created(data)
    );
    //append_listeners
  }

  sd_ezjcUjUgISr3wDOu(bh) {
    try {
      bh = this.sd_v7GyJD3dWDYNYWQ3(bh);
      //appendnew_next_sd_ezjcUjUgISr3wDOu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ezjcUjUgISr3wDOu');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zpSp9nkAAsiY4oEx');
    }
  }

  finfo_created(bh) {
    try {
      bh = this.sd_Qqj2qJYwawOECCMH(bh);
      //appendnew_next_finfo_created
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nn4mCcfU3EBFhEu6');
    }
  }

  //appendnew_flow_finfoComponent_start

  sd_v7GyJD3dWDYNYWQ3(bh) {
    try {
      bh = this.sd_SVMLe9lX2GvpUEDE(bh);
      //appendnew_next_sd_v7GyJD3dWDYNYWQ3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v7GyJD3dWDYNYWQ3');
    }
  }

  sd_SVMLe9lX2GvpUEDE(bh) {
    try {
      this.page.finfoList = [];
      bh = this.sd_HQw6ADJQPR9gcIeB(bh);
      //appendnew_next_sd_SVMLe9lX2GvpUEDE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SVMLe9lX2GvpUEDE');
    }
  }

  sd_HQw6ADJQPR9gcIeB(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.sd_DqpHv1l8Pg5Gh7v1(bh);
      //appendnew_next_sd_HQw6ADJQPR9gcIeB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HQw6ADJQPR9gcIeB');
    }
  }

  sd_DqpHv1l8Pg5Gh7v1(bh) {
    try {
      const page = this.page;
      const finfo = [...(page.checkedOut.case['finfo'] || [])];
      page.finfoList = new MatTableDataSource(finfo);

      // page.finfoList = new MatTableDataSource([
      //     {
      //         "date": "2022-03-24T06:34:53.614Z",
      //         "author": {
      //             "name": "Annabel Chong",
      //             "accountId": "sankarshan.joshi@neutrinos.co"
      //         },
      //         "comments": "test",
      //         "documents": [
      //             {
      //                 "name": "2-D ECHO",
      //                 "category": "Medical",
      //                 "code": "01"
      //             },
      //             {
      //                 "name": "ASTHMA BRONCHI QUE",
      //                 "category": "Questionnaire",
      //                 "code": "01"
      //             },
      //             {
      //                 "name": "2-D ECHO",
      //                 "category": "Medical",
      //                 "code": "01"
      //             },
      //             {
      //                 "name": "ASTHMA BRONCHI QUE",
      //                 "category": "Questionnaire",
      //                 "code": "01"
      //             }
      //         ],
      //         "status": "pending"
      //     }
      // ]);
      //appendnew_next_sd_DqpHv1l8Pg5Gh7v1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DqpHv1l8Pg5Gh7v1');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatTable: this.MatTable,
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NxaMbBXw2y8tV8EN');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.finfoList.sort = this.MatSort;

      setTimeout(() => this.MatSort.sort({ id: 'date', start: 'desc' }));

      this.page.finfoList.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rJkbn9FvAD9rVZhe');
    }
  }

  sd_Qqj2qJYwawOECCMH(bh) {
    try {
      const page = this.page;
      page.checkedOut.case['finfo'].unshift(bh.local.newFINFO);
      page.finfoList.data = [...page.checkedOut.case['finfo']];
      this.MatTable.renderRows();

      //appendnew_next_sd_Qqj2qJYwawOECCMH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qqj2qJYwawOECCMH');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const sub = this.page._pubsub_sd_Nn4mCcfU3EBFhEu6;
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
  //appendnew_flow_finfoComponent_Catch
}
