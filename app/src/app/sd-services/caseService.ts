/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class caseService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_caseService

  async getCaseDocsForCaseId(caseId: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          caseId: caseId,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.templateUrl(bh);
      //appendnew_next_getCaseDocsForCaseId
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_er60ubsmAmc1cnmx');
    }
  }

  async getCaseDocsFile(docId: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          docId: docId,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.templateUrl1(bh);
      //appendnew_next_getCaseDocsFile
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fNkNrQ5dznJ3YiTE');
    }
  }

  async getCaseDocsForResult(idpFileId: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          idpFileId: idpFileId,
        },
        local: {
          idpAnlData: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.templateUrl2(bh);
      //appendnew_next_getCaseDocsForResult
      return (
        // formatting output variables
        {
          input: {},
          local: {
            idpAnlData: bh.local.idpAnlData,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EP66Fkz1KfGyPWrz');
    }
  }

  async addnewpayload(payload: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          payload: payload,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_TzVHliGMvhQ6uDCA(bh);
      //appendnew_next_addnewpayload
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AVPrg6ObblCqKj23');
    }
  }

  //appendnew_flow_caseService_start

  async templateUrl(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/docs/${bh.input.caseId}`;
      bh = await this.getEmailTemplate(bh);
      //appendnew_next_templateUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z5w6xelNqSHxtrb2');
    }
  }

  async getEmailTemplate(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_getEmailTemplate
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XxEMJzm40WyyzLEO');
    }
  }

  async templateUrl1(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/file/${bh.input.docId}`;
      bh = await this.getDocumentBuffer(bh);
      //appendnew_next_templateUrl1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7g57mDYxhTv4dHYa');
    }
  }

  async getDocumentBuffer(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'arraybuffer',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_getDocumentBuffer
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ilda7MPIUAZykQU3');
    }
  }

  async templateUrl2(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/case/docs/result/${bh.input.idpFileId}`;
      bh = await this.getDocumentResult(bh);
      //appendnew_next_templateUrl2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0VNRguKcdP9YS75x');
    }
  }

  async getDocumentResult(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.idpAnlData = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_getDocumentResult
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z4aVdQ7EWscvBALt');
    }
  }

  async sd_TzVHliGMvhQ6uDCA(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/wq/addAdditionalCaseFields`;

      // bh.body = {
      //     comment: bh.input.comment,
      //     user: bh.system.currentUser.username
      // }

      bh.body = bh.input.payload;
      bh = await this.sd_07rYo4tv0AiwnKlF(bh);
      //appendnew_next_sd_TzVHliGMvhQ6uDCA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TzVHliGMvhQ6uDCA');
    }
  }

  async sd_07rYo4tv0AiwnKlF(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: { 'hide-spinner': 'true' },
        params: {},
        body: bh.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_07rYo4tv0AiwnKlF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_07rYo4tv0AiwnKlF');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_caseService_Catch
}
