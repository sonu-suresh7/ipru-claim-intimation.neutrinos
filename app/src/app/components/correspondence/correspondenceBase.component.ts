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
import { cache } from 'app/sd-services/cache'; //_splitter_
import { emailService } from 'app/sd-services/emailService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-correspondenceBase',
  templateUrl: './correspondenceBase.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class correspondenceBaseComponent {
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
      this.sd_EJTiPHbYVFoPGhGy(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    this.page._pubsub_sd_bVRrS3qwBSBZGkyK = bh.system.pubsubService.$sub(
      'fetch-sent-emails',
      async (data) => this.fetchSentEmails(data)
    );
    //append_listeners
  }

  sd_EJTiPHbYVFoPGhGy(bh) {
    try {
      bh = this.sd_SmgPZbXqZsBOO3mB(bh);
      //appendnew_next_sd_EJTiPHbYVFoPGhGy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EJTiPHbYVFoPGhGy');
    }
  }

  openComposeMail(mail: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { mail: mail };
      bh.local = { rsnComponent: 'EMAIL_COMPOSE' };
      bh = this.sd_mxBoLNpCgdG5ygMv(bh);
      //appendnew_next_openComposeMail
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ED4NAPLbsnLQJySo');
    }
  }

  openEmailView(email: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { email: email };
      bh.local = {};
      bh = this.sd_p9o4g2ZdTkz2lHLM(bh);
      //appendnew_next_openEmailView
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9AIUmePd4tqnnOCF');
    }
  }

  exitEmailView(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_p9o4g2ZdTkz2lHLM(bh);
      //appendnew_next_exitEmailView
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0NVY3vL49kiOduGQ');
    }
  }

  changeListForPage(evt: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { evt: evt };
      bh.local = {};
      bh = this.sd_ckiuMUDhjC2s5qH2(bh);
      //appendnew_next_changeListForPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZFiJoBRZwT0hpftq');
    }
  }

  fetchSentEmails(bh) {
    try {
      bh = this.sd_8fP1ZyOVzRQE3oTy(bh);
      //appendnew_next_fetchSentEmails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bVRrS3qwBSBZGkyK');
    }
  }

  //appendnew_flow_correspondenceBaseComponent_start

  sd_SmgPZbXqZsBOO3mB(bh) {
    try {
      this.page.emails = [];
      this.page.pagedEmails = [];
      this.page.pageSize = 10;
      bh = this.sd_8fP1ZyOVzRQE3oTy(bh);
      //appendnew_next_sd_SmgPZbXqZsBOO3mB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SmgPZbXqZsBOO3mB');
    }
  }

  sd_8fP1ZyOVzRQE3oTy(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      bh.local.checkedOut = cacheInstance['checkedOut'];
      bh = this.sd_gibHnjrE5f4frqit(bh);
      //appendnew_next_sd_8fP1ZyOVzRQE3oTy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8fP1ZyOVzRQE3oTy');
    }
  }

  async sd_gibHnjrE5f4frqit(bh) {
    try {
      const emailServiceInstance: emailService =
        this.__page_injector__.get(emailService);

      let outputVariables = await emailServiceInstance.getEmailsOfType(
        'sent',
        bh.local.checkedOut.task.pid
      );
      this.page.emails = outputVariables.local.emails;

      bh = this.sd_ckiuMUDhjC2s5qH2(bh);
      //appendnew_next_sd_gibHnjrE5f4frqit
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gibHnjrE5f4frqit');
    }
  }

  sd_ckiuMUDhjC2s5qH2(bh) {
    try {
      const page = this.page;
      const { pageIndex = 0, pageSize = page.pageSize } = bh.input.evt || {};
      const start = pageIndex * pageSize;
      const end = start + pageSize;
      page.pagedEmails = page.emails.slice(start, end);
      //appendnew_next_sd_ckiuMUDhjC2s5qH2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ckiuMUDhjC2s5qH2');
    }
  }

  sd_mxBoLNpCgdG5ygMv(bh) {
    try {
      bh.system.pubsubService.$pub('open-rsn', bh);
      //appendnew_next_sd_mxBoLNpCgdG5ygMv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mxBoLNpCgdG5ygMv');
    }
  }

  sd_p9o4g2ZdTkz2lHLM(bh) {
    try {
      this.page.selectedEmail = bh.input.email;
      //appendnew_next_sd_p9o4g2ZdTkz2lHLM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p9o4g2ZdTkz2lHLM');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const sub = this.page._pubsub_sd_bVRrS3qwBSBZGkyK;
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
  //appendnew_flow_correspondenceBaseComponent_Catch
}
