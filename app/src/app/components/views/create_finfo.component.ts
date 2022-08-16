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
import { cache } from 'app/sd-services/cache'; //_splitter_
import { SelectionModel } from '@angular/cdk/collections'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-create_finfo',
  templateUrl: './create_finfo.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class create_finfoComponent implements AfterViewInit {
  @ViewChild(MatSort, { read: MatSort })
  public MatSort: any = null;
  @ViewChild(MatPaginator, { read: MatPaginator })
  public MatPaginator: any = null;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_E091KmywTzywOEEF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_E091KmywTzywOEEF(bh) {
    try {
      bh = this.sd_gABXnZcElS28WeNy(bh);
      //appendnew_next_sd_E091KmywTzywOEEF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E091KmywTzywOEEF');
    }
  }

  checkboxLabel(row: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row: row };
      bh.local = {};
      bh = this.sd_zFBrteJFBxQW9Stz(bh);
      //appendnew_next_checkboxLabel
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qaK9jFUIrrSj1V1h');
    }
  }

  isAllSelected(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Srs7nsThBJn2agV9(bh);
      //appendnew_next_isAllSelected
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HdDr5lhodTuC5wzz');
    }
  }

  masterToggle(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tcHdtQlNYC8cr3tR(bh);
      //appendnew_next_masterToggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_spE3bI62z9CBOgFD');
    }
  }

  submit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KInTQbMevu44NkF0(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XI7fqUAR7uxbvfZT');
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
      return this.errorHandler(bh, e, 'sd_YGrOjZ0aimTB5HFp');
    }
  }

  applyFilter(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_6n6dGZwJ2nko4znq(bh);
      //appendnew_next_applyFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Re5DvkwL9w526LzA');
    }
  }

  //appendnew_flow_create_finfoComponent_start

  sd_gABXnZcElS28WeNy(bh) {
    try {
      bh = this.sd_NQaS79KxcwbBJYo1(bh);
      //appendnew_next_sd_gABXnZcElS28WeNy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gABXnZcElS28WeNy');
    }
  }

  sd_NQaS79KxcwbBJYo1(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.sd_bf6tU9RulcwGytkX(bh);
      //appendnew_next_sd_NQaS79KxcwbBJYo1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NQaS79KxcwbBJYo1');
    }
  }

  sd_bf6tU9RulcwGytkX(bh) {
    try {
      const page = this.page;
      this.page.finfoTable = new MatTableDataSource();
      this.page.selection = new SelectionModel(true, []);
      bh.local.getFinfoConfigURL = `${page.system.environment.properties.ssdBaseUrl}/uiconfig/finfo-requirements`;
      bh = this.sd_JQ2FTXeD5n5w7tQe(bh);
      //appendnew_next_sd_bf6tU9RulcwGytkX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bf6tU9RulcwGytkX');
    }
  }

  async sd_JQ2FTXeD5n5w7tQe(bh) {
    try {
      let requestOptions = {
        url: bh.local.getFinfoConfigURL,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.finfoConfig = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_JvrGQNUWWgWdhpwL(bh);
      //appendnew_next_sd_JQ2FTXeD5n5w7tQe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JQ2FTXeD5n5w7tQe');
    }
  }

  sd_JvrGQNUWWgWdhpwL(bh) {
    try {
      const page = this.page;
      this.page.finfoTable.data = bh.local.finfoConfig;

      bh = this.sd_CAPJ01gYmNpJvVST(bh);
      //appendnew_next_sd_JvrGQNUWWgWdhpwL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JvrGQNUWWgWdhpwL');
    }
  }

  sd_CAPJ01gYmNpJvVST(bh) {
    try {
      //appendnew_next_sd_CAPJ01gYmNpJvVST
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CAPJ01gYmNpJvVST');
    }
  }

  sd_zFBrteJFBxQW9Stz(bh) {
    try {
      const page = this.page;
      if (!bh.input.row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${
        this.page.selection.isSelected(bh.input.row) ? 'deselect' : 'select'
      } row ${bh.input.row.position + 1}`;

      //appendnew_next_sd_zFBrteJFBxQW9Stz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zFBrteJFBxQW9Stz');
    }
  }

  sd_Srs7nsThBJn2agV9(bh) {
    try {
      const page = this.page;
      const numSelected = this.page.selection.selected.length;
      const numRows = this.page.finfoTable.data.length;
      return numSelected === numRows;
      //appendnew_next_sd_Srs7nsThBJn2agV9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Srs7nsThBJn2agV9');
    }
  }

  sd_tcHdtQlNYC8cr3tR(bh) {
    try {
      const page = this.page;
      if (this.isAllSelected()) {
        this.page.selection.clear();
        return;
      }

      this.page.selection.select(...this.page.finfoTable.data);
      //appendnew_next_sd_tcHdtQlNYC8cr3tR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tcHdtQlNYC8cr3tR');
    }
  }

  sd_KInTQbMevu44NkF0(bh) {
    try {
      const page = this.page;
      let finfo: any = {
        caseId: page.checkedOut.case['_id'],
        pid: page.checkedOut.task['pid'],
        date: new Date(),
        author: {
          name: page.system.oauthService.userInfo.displayName,
          accountId: page.system.oauthService.userInfo.username,
        },
      };

      if (page.comment) {
        finfo['comments'] = page.comment;
      }

      if (page.selection.selected) {
        finfo.requirements = [];
        for (let item of page.selection.selected) {
          finfo.requirements.push(item);
        }
        finfo['status'] = 'pending';
      }

      bh.local.newFINFO = finfo;

      //HTTP Req

      //URL
      bh.local.createURL = `${page.system.environment.properties.ssdBaseUrl}/case/recommendation/finfo`;

      //Payload
      bh.local.createPayload = {
        finfo: finfo,
        caseData: page.checkedOut.case,
      };

      bh = this.sd_ca2DlgyTfvaOYz7O(bh);
      //appendnew_next_sd_KInTQbMevu44NkF0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KInTQbMevu44NkF0');
    }
  }

  async sd_ca2DlgyTfvaOYz7O(bh) {
    try {
      let requestOptions = {
        url: bh.local.createURL,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.createPayload,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_YXJ04yIba4ipNFCl(bh);
      //appendnew_next_sd_ca2DlgyTfvaOYz7O
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ca2DlgyTfvaOYz7O');
    }
  }

  sd_YXJ04yIba4ipNFCl(bh) {
    try {
      const page = this.page;
      if (bh.local.result && bh.local.result['docId']) {
        bh.local.newFINFO['attachments'] = bh.local.result;
        bh.emailComposeData = {
          attachments: bh.local.newFINFO.attachments,
        };
      }

      bh.local.newFINFO['finfoId'] = bh.local.result.finfoId;
      bh.local.rsnComponent = 'EMAIL_COMPOSE';
      bh = this.sd_RzecpBk6nLsAChZb(bh);
      //appendnew_next_sd_YXJ04yIba4ipNFCl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YXJ04yIba4ipNFCl');
    }
  }

  sd_RzecpBk6nLsAChZb(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      cacheInstance['emailComposerData'] = bh.emailComposeData;
      cacheInstance['newfinfo'] = bh.local.newFINFO;
      bh = this.emitFinfoCreated(bh);
      bh = this.emitOpenRsn(bh);
      //appendnew_next_sd_RzecpBk6nLsAChZb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RzecpBk6nLsAChZb');
    }
  }

  emitFinfoCreated(bh) {
    try {
      bh.system.pubsubService.$pub('finfo_created', bh);
      //appendnew_next_emitFinfoCreated
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6089Dajot07c3jxQ');
    }
  }

  emitOpenRsn(bh) {
    try {
      bh.system.pubsubService.$pub('open-rsn', bh);
      //appendnew_next_emitOpenRsn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mHTty6YoVHpU7Px8');
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
      return this.errorHandler(bh, e, 'sd_9Um8PofRiPkL3IFw');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.finfoTable.sort = this.MatSort;
      this.page.finfoTable.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DrcgkgUwwNFoylgW');
    }
  }

  sd_6n6dGZwJ2nko4znq(bh) {
    try {
      const page = this.page;
      const filterValue = (bh.input.event.target as HTMLInputElement).value;
      this.page.finfoTable.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_6n6dGZwJ2nko4znq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6n6dGZwJ2nko4znq');
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
  //appendnew_flow_create_finfoComponent_Catch
}
