/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-autoRecommendation',
  templateUrl: './autoRecommendation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class autoRecommendationComponent implements AfterViewInit {
  @ViewChild(MatSort, { read: MatSort })
  public MatSort: any = null;
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
      this.sd_EVsX3meEsv4t7LxU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EVsX3meEsv4t7LxU(bh) {
    try {
      bh = this.sd_2xu19Ys3SxeddpaQ(bh);
      //appendnew_next_sd_EVsX3meEsv4t7LxU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EVsX3meEsv4t7LxU');
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
      return this.errorHandler(bh, e, 'sd_3xHSaSFqS4Gs2G2B');
    }
  }

  //appendnew_flow_autoRecommendationComponent_start

  sd_2xu19Ys3SxeddpaQ(bh) {
    try {
      this.page.autoRecommendation = [];
      bh = this.sd_2vlD7E5A8Y2cgXmo(bh);
      //appendnew_next_sd_2xu19Ys3SxeddpaQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2xu19Ys3SxeddpaQ');
    }
  }

  sd_2vlD7E5A8Y2cgXmo(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.sd_X8zlgz6AbPg7TZDJ(bh);
      //appendnew_next_sd_2vlD7E5A8Y2cgXmo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2vlD7E5A8Y2cgXmo');
    }
  }

  sd_X8zlgz6AbPg7TZDJ(bh) {
    try {
      const page = this.page;
      let autoRecommendation = page.checkedOut.case['autoRecommendation'] || [];
      page.autoRecommendation = new MatTableDataSource(autoRecommendation);

      //appendnew_next_sd_X8zlgz6AbPg7TZDJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X8zlgz6AbPg7TZDJ');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EkF1EQwJgXRqJPp0');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.autoRecommendation.sort = this.MatSort;
      this.page.autoRecommendation.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lBVbdyrjn7o8WquK');
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
  //appendnew_flow_autoRecommendationComponent_Catch
}
