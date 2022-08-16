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
import { SelectionModel } from '@angular/cdk/collections'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-add_referral',
  templateUrl: './add_referral.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_referralComponent implements AfterViewInit {
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
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_CFuYxGF2dw3tdt2a(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_CFuYxGF2dw3tdt2a(bh) {
    try {
      bh = this.sd_E1RekoMcJwDCUUoP(bh);
      //appendnew_next_sd_CFuYxGF2dw3tdt2a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CFuYxGF2dw3tdt2a');
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
      return this.errorHandler(bh, e, 'sd_p5iZMjzv2jbQcq0R');
    }
  }

  checkboxLabel(row: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row: row };
      bh.local = {};
      bh = this.sd_GNmRkIr33pSlrdus(bh);
      //appendnew_next_checkboxLabel
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JtP7ApgUaVqaI5uR');
    }
  }

  isAllSelected(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PJRPzFEVYBDEya5h(bh);
      //appendnew_next_isAllSelected
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i3OELBeg1LD5Fb5e');
    }
  }

  masterToggle(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ZBT8ukQEMJNDXte1(bh);
      //appendnew_next_masterToggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zwu2NfOyIVmG0XjZ');
    }
  }

  submit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_T7cEim7qbFuuT1Zu(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ds0s7tJwQ3RBNEgs');
    }
  }

  //appendnew_flow_add_referralComponent_start

  sd_E1RekoMcJwDCUUoP(bh) {
    try {
      this.page.referedTo = [];
      bh = this.sd_7zGDgdtGozr2JqNa(bh);
      //appendnew_next_sd_E1RekoMcJwDCUUoP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E1RekoMcJwDCUUoP');
    }
  }

  sd_7zGDgdtGozr2JqNa(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.sd_vdDU843XrHBvIOmy(bh);
      //appendnew_next_sd_7zGDgdtGozr2JqNa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7zGDgdtGozr2JqNa');
    }
  }

  sd_vdDU843XrHBvIOmy(bh) {
    try {
      const page = this.page;
      let caseId = page.checkedOut.case['_id'];
      bh.local.getCaseDocURL = `${page.system.environment.properties.ssdBaseUrl}/case/docs/${caseId}`;

      page.referralOptions = [
        'Sr. Underwriter',
        'Regional Underwriter',
        'Reinsurer',
        'Legal',
        'Compliance',
      ];

      this.page.referalTable = new MatTableDataSource([]);
      this.page.selection = new SelectionModel(true, []);
      bh = this.sd_WNbGOP9ykTfppg1q(bh);
      //appendnew_next_sd_vdDU843XrHBvIOmy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vdDU843XrHBvIOmy');
    }
  }

  async sd_WNbGOP9ykTfppg1q(bh) {
    try {
      let requestOptions = {
        url: bh.local.getCaseDocURL,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.caseDocuments = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_WNbGOP9ykTfppg1q
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WNbGOP9ykTfppg1q');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.caseDocuments = bh.local.caseDocuments.documents || [];

      for (let i = 0; i < bh.local.caseDocuments.length; i++) {
        bh.local.caseDocuments[i]['redact'] = false;
      }

      page.referalTable.data = bh.local.caseDocuments;

      bh = this.sd_WBd1TJj0kqCpqroK(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OlaGcro0qbYdhcmp');
    }
  }

  sd_WBd1TJj0kqCpqroK(bh) {
    try {
      //appendnew_next_sd_WBd1TJj0kqCpqroK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WBd1TJj0kqCpqroK');
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
      return this.errorHandler(bh, e, 'sd_ZME85CXz1EWFkUdx');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.referalTable.sort = this.MatSort;
      setTimeout(() => this.MatSort.sort({ id: 'filename', start: 'desc' }));
      this.page.referalTable.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dLszSz5SaOWKtJvY');
    }
  }

  sd_GNmRkIr33pSlrdus(bh) {
    try {
      const page = this.page;
      if (!bh.input.row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${
        this.page.selection.isSelected(bh.input.row) ? 'deselect' : 'select'
      } row ${bh.input.row.position + 1}`;

      //appendnew_next_sd_GNmRkIr33pSlrdus
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GNmRkIr33pSlrdus');
    }
  }

  sd_PJRPzFEVYBDEya5h(bh) {
    try {
      const page = this.page;
      const numSelected = this.page.selection.selected.length;
      const numRows = this.page.referalTable.data.length;
      return numSelected === numRows;
      //appendnew_next_sd_PJRPzFEVYBDEya5h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PJRPzFEVYBDEya5h');
    }
  }

  sd_ZBT8ukQEMJNDXte1(bh) {
    try {
      const page = this.page;
      if (this.isAllSelected()) {
        this.page.selection.clear();
        return;
      }

      this.page.selection.select(...this.page.referalTable.data);
      //appendnew_next_sd_ZBT8ukQEMJNDXte1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZBT8ukQEMJNDXte1');
    }
  }

  sd_T7cEim7qbFuuT1Zu(bh) {
    try {
      const page = this.page;
      let referral: any = {
        caseId: page.checkedOut.case['_id'],
        pid: page.checkedOut.task['pid'],
        date: new Date(),
        author: {
          name: page.system.oauthService.userInfo.displayName,
          accountId: page.system.oauthService.userInfo.username,
        },
        status: 'pending',
        comments: page.comment,
        referedTo: page.referedTo,
      };

      if (page.selection.selected) {
        referral.documents = [];
        for (let item of page.selection.selected) {
          referral.documents.push(item);
        }
      }

      bh.local.referral = referral;

      bh.local.createURL = `${page.system.environment.properties.ssdBaseUrl}/case/recommendation/referral`;

      //Payload
      bh.local.createPayload = {
        referral: referral,
        caseData: page.checkedOut.case,
      };

      bh = this.sd_rHfLlag7jxr76F4B(bh);
      //appendnew_next_sd_T7cEim7qbFuuT1Zu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T7cEim7qbFuuT1Zu');
    }
  }

  async sd_rHfLlag7jxr76F4B(bh) {
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
      bh = this.sd_zA5qx1JDbHRMB9yV(bh);
      //appendnew_next_sd_rHfLlag7jxr76F4B
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rHfLlag7jxr76F4B');
    }
  }

  sd_zA5qx1JDbHRMB9yV(bh) {
    try {
      const page = this.page;
      bh.local.referral['referralId'] = bh.local.result.referralId;

      bh = this.emitReferalCreated(bh);
      //appendnew_next_sd_zA5qx1JDbHRMB9yV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zA5qx1JDbHRMB9yV');
    }
  }

  emitReferalCreated(bh) {
    try {
      bh.system.pubsubService.$pub('referal_created', bh);
      //appendnew_next_emitReferalCreated
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h48iDfBcAyWCiwpy');
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
  //appendnew_flow_add_referralComponent_Catch
}
