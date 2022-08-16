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
export class emailService {
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

  //   service flows_emailService

  async sendEmail(data: any = undefined, pid: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          data: data,
          pid: pid,
        },
        local: {
          emailBody: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.emailUrl(bh);
      //appendnew_next_sendEmail
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AWcp1Sv3cTckW698');
    }
  }

  async emailTemplate(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          templates: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.templateUrl(bh);
      //appendnew_next_emailTemplate
      return (
        // formatting output variables
        {
          input: {},
          local: {
            templates: bh.local.templates,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NZY04I58Y5M2eg4N');
    }
  }

  async getEmailsOfType(emailType = '', pid = 0, ...others) {
    try {
      var bh: any = {
        input: {
          emailType: emailType,
          pid: pid,
        },
        local: {
          emails: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.emailsGetUrl(bh);
      //appendnew_next_getEmailsOfType
      return (
        // formatting output variables
        {
          input: {},
          local: {
            emails: bh.local.emails,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o4uHnDdOYeb42ejy');
    }
  }

  //appendnew_flow_emailService_start

  async emailUrl(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/correspondence/email/send/${bh.input.pid}`;
      console.log(bh.input.data);
      bh.local.emailBody = bh.input.data.email;
      bh = await this.postSendEmail(bh);
      //appendnew_next_emailUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7CLhGog4lQLsxcvq');
    }
  }

  async postSendEmail(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.emailBody,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_JGVEPxjGBTcxZm0f(bh);
      //appendnew_next_postSendEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2WxxNf4FSiIQX9l8');
    }
  }

  async sd_JGVEPxjGBTcxZm0f(bh) {
    try {
      this.matSnackBar.open('Email Sent', 'Ok', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_JGVEPxjGBTcxZm0f
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JGVEPxjGBTcxZm0f');
    }
  }

  async sd_lCWLghxVuTuWrzGt(bh) {
    try {
      this.matSnackBar.open(bh.error.message, 'Ok', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = await this.sd_7qah2SE6xjfMWrqY(bh);
      //appendnew_next_sd_lCWLghxVuTuWrzGt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lCWLghxVuTuWrzGt');
    }
  }

  async sd_7qah2SE6xjfMWrqY(bh) {
    try {
      console.log(bh);
      console.log(bh.error.message);
      //appendnew_next_sd_7qah2SE6xjfMWrqY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7qah2SE6xjfMWrqY');
    }
  }

  async templateUrl(bh) {
    try {
      bh.templatesUrl = `${bh.system.environment.properties.ssdBaseUrl}/correspondence/email/templates`;
      bh = await this.getEmailTemplate(bh);
      //appendnew_next_templateUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U3Th5JrHDEcsjOVJ');
    }
  }

  async getEmailTemplate(bh) {
    try {
      let requestOptions = {
        url: bh.templatesUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.templates = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_getEmailTemplate
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qv8sVYPs3ReAmiQB');
    }
  }

  async emailsGetUrl(bh) {
    try {
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/correspondence/email/${bh.input.emailType}/${bh.input.pid}`;
      bh = await this.requestGetEmails(bh);
      //appendnew_next_emailsGetUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3EeO7sHRAJ07hK4K');
    }
  }

  async requestGetEmails(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.assignToEmails(bh);
      //appendnew_next_requestGetEmails
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fIxese3HxZ6aNReC');
    }
  }

  async assignToEmails(bh) {
    try {
      bh.local.emails = bh.local.res.emails;
      //appendnew_next_assignToEmails
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RcPgCXRIOHEdNZ7f');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_7XBbZdwPpElaMQNE(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_7XBbZdwPpElaMQNE(bh) {
    const nodes = ['sd_2WxxNf4FSiIQX9l8', 'sd_IRAU8NcGF0fISOaz'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_lCWLghxVuTuWrzGt(bh);
      //appendnew_next_sd_7XBbZdwPpElaMQNE
      return true;
    }
    return false;
  }
  //appendnew_flow_emailService_Catch
}
