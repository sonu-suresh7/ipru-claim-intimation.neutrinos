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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { caseService } from 'app/sd-services/caseService'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { document_viewerComponent } from './document_viewer.component'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-case_documents',
  templateUrl: './case_documents.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class case_documentsComponent implements AfterViewInit {
  @ViewChild(MatSort)
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
      this.sd_WONPgeRxs7j3SQoU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_WONPgeRxs7j3SQoU(bh) {
    try {
      bh = this.sd_uDihmWtQQtzuNEdQ(bh);
      //appendnew_next_sd_WONPgeRxs7j3SQoU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WONPgeRxs7j3SQoU');
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
      return this.errorHandler(bh, e, 'sd_Q7S4BcktI2ADlJFL');
    }
  }

  openDocument(doc: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { doc: doc };
      bh.local = {};
      bh = this.sd_Qywx19nhl4wVjsGY(bh);
      //appendnew_next_openDocument
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C8kJhrQtoKbZ1jX6');
    }
  }

  //appendnew_flow_case_documentsComponent_start

  sd_uDihmWtQQtzuNEdQ(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh = this.sd_qC7ofiCaLMIV0t97(bh);
      //appendnew_next_sd_uDihmWtQQtzuNEdQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uDihmWtQQtzuNEdQ');
    }
  }

  sd_qC7ofiCaLMIV0t97(bh) {
    try {
      const page = this.page;
      let caseId = page.checkedOut.case['_id'];
      bh.local.getCaseDocURL = `${page.system.environment.properties.ssdBaseUrl}/case/docs/${caseId}`;

      page.documentsTable = new MatTableDataSource([]);

      bh = this.sd_ExB3TxUPnPsCTNWD(bh);
      //appendnew_next_sd_qC7ofiCaLMIV0t97
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qC7ofiCaLMIV0t97');
    }
  }

  async sd_ExB3TxUPnPsCTNWD(bh) {
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
      bh = this.asd(bh);
      //appendnew_next_sd_ExB3TxUPnPsCTNWD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ExB3TxUPnPsCTNWD');
    }
  }

  asd(bh) {
    try {
      const page = this.page;
      bh.local.caseDocuments = bh.local.caseDocuments.documents || [];

      sessionStorage.removeItem('class-docs');
      let classDocs = [];
      if (bh.local.caseDocuments && bh.local.caseDocuments.length > 0) {
        bh.local.caseDocuments.forEach((el) => {
          classDocs.push(el.metadata.labels.tag_name);
        });
      }
      sessionStorage.setItem('class-docs', JSON.stringify(classDocs));
      // for (let i = 0; i < bh.local.caseDocuments.length; i++) {
      //     bh.local.caseDocuments[i]['redact'] = false;
      // }

      page.documentsTable.data = bh.local.caseDocuments;

      //appendnew_next_asd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A8VLRaeGLWW6NLPY');
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
      return this.errorHandler(bh, e, 'sd_2DPNeFEHk8ChET52');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.documentsTable.sort = this.MatSort;
      setTimeout(() => this.MatSort.sort({ id: 'uploadDate', start: 'desc' }));
      this.page.documentsTable.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6IdzgYmTD0asRoKq');
    }
  }

  async sd_Qywx19nhl4wVjsGY(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.doc.metadata.idpStatus,
          'PENDING',
          undefined,
          undefined
        )
      ) {
        bh = this.sbMessage(bh);
        otherwiseFlag = false;
      } else if (
        this.sdService.operators['eq'](
          bh.input.doc.metadata.idpStatus,
          'IGNORED',
          undefined,
          undefined
        )
      ) {
        bh = this.sbMessage(bh);
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
        bh = await this.getDocumentResult(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qywx19nhl4wVjsGY');
    }
  }

  sbMessage(bh) {
    try {
      const page = this.page;
      bh.local.msg = `idp status is ${
        bh.input.doc.metadata.idpStatus?.toLowerCase?.() || 'incomplete'
      }`;
      bh = this.sd_9QuOyGlw9Wku6fbp(bh);
      //appendnew_next_sbMessage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_II4hVYLUle7sJcpE');
    }
  }

  sd_9QuOyGlw9Wku6fbp(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.local.msg, '', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_9QuOyGlw9Wku6fbp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9QuOyGlw9Wku6fbp');
    }
  }

  async getDocumentResult(bh) {
    try {
      const caseServiceInstance: caseService =
        this.__page_injector__.get(caseService);

      let outputVariables = await caseServiceInstance.getCaseDocsForResult(
        bh.input.doc.metadata.idpFileId
      );
      bh.local.documentResult = outputVariables.local.idpAnlData;

      bh = this.getDocumentPDF(bh);
      //appendnew_next_getDocumentResult
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kvTkBlnSOP2vkS6f');
    }
  }

  async getDocumentPDF(bh) {
    try {
      const caseServiceInstance: caseService =
        this.__page_injector__.get(caseService);

      let outputVariables = await caseServiceInstance.getCaseDocsFile(
        bh.input.doc._id
      );
      bh.local.pdf = outputVariables.local.result;

      bh = this.sd_JpTQy79ZZwYLLeeZ(bh);
      //appendnew_next_getDocumentPDF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4KEdSIRFoextHU3v');
    }
  }

  async sd_JpTQy79ZZwYLLeeZ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nnull'](
          bh.local.pdf,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.setDialogData(bh);
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
        bh = await this.sbMessage2(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JpTQy79ZZwYLLeeZ');
    }
  }

  setDialogData(bh) {
    try {
      const page = this.page;
      page.showDocViewer = !!bh.local.pdf;
      bh.local.dialogData = {
        documentResult: bh.local.documentResult,
        pdf: bh.local.pdf,
      };
      bh = this.sd_t4q6JG6v6mHLCP9j(bh);
      //appendnew_next_setDialogData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4xpUzdCAM0WOiLRF');
    }
  }

  sd_t4q6JG6v6mHLCP9j(bh) {
    try {
      const document_viewerDialog = this.__page_injector__.get(MatDialog);
      const document_viewerDialogRef = document_viewerDialog.open(
        document_viewerComponent,
        {
          data: bh.local.dialogData,
          height: '90vh',
          minHeight: '90vh',
          minWidth: '90vw',
          width: '90vw',
        }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t4q6JG6v6mHLCP9j');
    }
  }

  sbMessage2(bh) {
    try {
      const page = this.page;
      bh.local.msg = `Could not load the document results`;
      bh = this.sd_9QuOyGlw9Wku6fbp(bh);
      //appendnew_next_sbMessage2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NMcyu5eOGHL4CqGR');
    }
  }

  sbMessage3(bh) {
    try {
      const page = this.page;
      bh.local.msg = `Could not load the document results`;
      bh = this.sd_vBnmd0W7N8HQlJwb(bh);
      //appendnew_next_sbMessage3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HgAEyMpPYlv9JD3D');
    }
  }

  sd_vBnmd0W7N8HQlJwb(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.local.msg, '', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_vBnmd0W7N8HQlJwb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vBnmd0W7N8HQlJwb');
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
      false ||
      this.sd_gIrD6xb4ccP01vhM(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_gIrD6xb4ccP01vhM(bh) {
    const nodes = ['sd_C8kJhrQtoKbZ1jX6'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sbMessage3(bh);
      //appendnew_next_sd_gIrD6xb4ccP01vhM
      return true;
    }
    return false;
  }
  //appendnew_flow_case_documentsComponent_Catch
}
