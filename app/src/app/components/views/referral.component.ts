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
  selector: 'bh-referral',
  templateUrl: './referral.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class referralComponent implements AfterViewInit {
  @ViewChild(MatSort, { read: MatSort })
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
  @ViewChild(MatTable)
  public MatTable: any = null;
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
      this.sd_pN0bSX8mBBrvrIUA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    this.page._pubsub_sd_LZn9Z0sfgqZy5vza = bh.system.pubsubService.$sub(
      'referal_created',
      async (data) => this.referal_created(data)
    );
    //append_listeners
  }

  sd_pN0bSX8mBBrvrIUA(bh) {
    try {
      bh = this.sd_2KCBn1ap76cOfSz0(bh);
      //appendnew_next_sd_pN0bSX8mBBrvrIUA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pN0bSX8mBBrvrIUA');
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
      return this.errorHandler(bh, e, 'sd_73sb8D5OodiYWMM2');
    }
  }

  referal_created(bh) {
    try {
      bh = this.sd_DyOtB2tjpTIRUrB1(bh);
      //appendnew_next_referal_created
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LZn9Z0sfgqZy5vza');
    }
  }

  //appendnew_flow_referralComponent_start

  sd_2KCBn1ap76cOfSz0(bh) {
    try {
      bh = this.sd_oFxAGqti8cJOGe77(bh);
      //appendnew_next_sd_2KCBn1ap76cOfSz0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2KCBn1ap76cOfSz0');
    }
  }

  sd_oFxAGqti8cJOGe77(bh) {
    try {
      this.page.referral = [];
      bh = this.sd_OKpaKq6Ga0VHnTHT(bh);
      //appendnew_next_sd_oFxAGqti8cJOGe77
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oFxAGqti8cJOGe77');
    }
  }

  sd_OKpaKq6Ga0VHnTHT(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.sd_JsFu7Mw0dHzVIMxd(bh);
      //appendnew_next_sd_OKpaKq6Ga0VHnTHT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OKpaKq6Ga0VHnTHT');
    }
  }

  sd_JsFu7Mw0dHzVIMxd(bh) {
    try {
      const page = this.page;
      const referral = [...(page.checkedOut.case['referrals'] || [])];
      page.referral = new MatTableDataSource(referral);

      // page.referal = new MatTableDataSource([
      //     {
      //         'date':'11/03/2022, 10:30AM','requestor':'Mira Curtis',
      //         'referedTo': 'Brandon Culhane',
      //         'documents':'Medical Examination, Liver Function Test, Microurinalysis',
      //         'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing....', 'status':'Pending'
      //     },
      //     {
      //         'date':'11/03/2022, 10:30AM','requestor':'Livia Ekstrom Bothman',
      //         'referedTo': 'Ruben Siphron',
      //         'documents':'Medical Examination, Liver Function Test, Microurinalysis',
      //         'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing....', 'status':'Pending'
      //     },
      //     {
      //         'date':'11/03/2022, 10:30AM','requestor':'Omar Donin',
      //         'referedTo': 'Roger Workman',
      //         'documents':'Medical Examination, Liver Function Test, Microurinalysis',
      //         'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing....', 'status':'Pending'
      //     },
      //     {
      //         'date':'11/03/2022, 10:30AM','requestor':'Livia Ekstrom Bothman',
      //         'referedTo': 'Ruben Siphron',
      //         'documents':'Medical Examination, Liver Function Test, Microurinalysis',
      //         'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing....', 'status':'Pending'
      //     },
      //     {
      //         'date':'11/03/2022, 10:30AM','requestor': 'Omar Donin',
      //         'referedTo': 'Roger Workman',
      //         'documents':'Medical Examination, Liver Function Test, Microurinalysis',
      //         'comments': 'Lorem ipsum dolor sit amet, consectetur adipiscing....', 'status':'Pending'
      //     },
      // ]);
      //appendnew_next_sd_JsFu7Mw0dHzVIMxd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JsFu7Mw0dHzVIMxd');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
        MatPaginator: this.MatPaginator,
        MatTable: this.MatTable,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BWz2cXFCkG5u0ZFI');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.referral.sort = this.MatSort;
      setTimeout(() => this.MatSort.sort({ id: 'date', start: 'desc' }));
      this.page.referral.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vKDztl69D3mIkwwz');
    }
  }

  sd_DyOtB2tjpTIRUrB1(bh) {
    try {
      const page = this.page;
      page.checkedOut.case['referrals'].unshift(bh.local.referral);
      page.referral.data = [...page.checkedOut.case['referrals']];
      this.MatTable.renderRows();

      bh = this.closeRsn(bh);
      //appendnew_next_sd_DyOtB2tjpTIRUrB1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DyOtB2tjpTIRUrB1');
    }
  }

  closeRsn(bh) {
    try {
      bh.system.pubsubService.$pub('close-rsn', bh);
      //appendnew_next_closeRsn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EcjINi1cL7RTqaQW');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const sub = this.page._pubsub_sd_LZn9Z0sfgqZy5vza;
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
  //appendnew_flow_referralComponent_Catch
}
