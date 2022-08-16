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
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-coverage_details',
  templateUrl: './coverage_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class coverage_detailsComponent implements AfterViewInit {
  @Input('coverageDetails')
  public coverageDetails: any = undefined;
  @ViewChild(MatSort, { read: MatSort })
  public MatSort: any = null;
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
      this.sd_9tAAqa3O0qMBjthZ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9tAAqa3O0qMBjthZ(bh) {
    try {
      bh = this.sd_IIX2HSgV0ce2eBfk(bh);
      //appendnew_next_sd_9tAAqa3O0qMBjthZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9tAAqa3O0qMBjthZ');
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
      return this.errorHandler(bh, e, 'sd_3IETl6dKw778mae0');
    }
  }

  //appendnew_flow_coverage_detailsComponent_start

  sd_IIX2HSgV0ce2eBfk(bh) {
    try {
      this.page.coverageData = [];
      bh = this.sd_8C361pKfzCR7WiLR(bh);
      //appendnew_next_sd_IIX2HSgV0ce2eBfk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IIX2HSgV0ce2eBfk');
    }
  }

  sd_8C361pKfzCR7WiLR(bh) {
    try {
      const page = this.page;
      page.coverageData = new MatTableDataSource(this.coverageDetails);
      bh = this.labelsMapper(bh);
      //appendnew_next_sd_8C361pKfzCR7WiLR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8C361pKfzCR7WiLR');
    }
  }

  labelsMapper(bh) {
    try {
      const page = this.page;
      page.labels = {
        product: {
          get label() {
            return page.locales.keys.product;
          },
        },
        lifeInsured: {
          get label() {
            return page.locales.keys.lifeInsured;
          },
        },
        age: {
          get label() {
            return page.locales.keys.age;
          },
        },
        gender: {
          get label() {
            return page.locales.keys.gender;
          },
        },
        sumInsured: {
          get label() {
            return page.locales.keys.sumInsured;
          },
        },
        premium: {
          get label() {
            return page.locales.keys.premium;
          },
        },
        term: {
          get label() {
            return page.locales.keys.term;
          },
        },
      };

      //appendnew_next_labelsMapper
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JYp5E32JxYiS3T4U');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5tFMzVd2niwA0VRE');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.coverageData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qdSKCU0IubyP1x1r');
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
  //appendnew_flow_coverage_detailsComponent_Catch
}
