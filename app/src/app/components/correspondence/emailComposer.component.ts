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
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'; //_splitter_
import * as hb from 'handlebars/dist/handlebars.min.js'; //_splitter_
import { FormBuilder, Validators, FormControl } from '@angular/forms'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { emailService } from 'app/sd-services/emailService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-emailComposer',
  templateUrl: './emailComposer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class emailComposerComponent {
  @Input('emailDataRes')
  public emailDataRes: any = undefined;
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
      this.sd_DejUMrjuq3XIvFMR(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DejUMrjuq3XIvFMR(bh) {
    try {
      bh = this.ckeditor5BuildClassic(bh);
      //appendnew_next_sd_DejUMrjuq3XIvFMR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DejUMrjuq3XIvFMR');
    }
  }

  selectTemplate(value: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};
      bh = this.sd_FGg8Y3OA9Gu3SBbR(bh);
      //appendnew_next_selectTemplate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6tgzAjmtP5uPGrw4');
    }
  }

  sendEmail(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.prepareHttpBody(bh);
      //appendnew_next_sendEmail
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g5VHMndrwRycoKna');
    }
  }

  getTemplates(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_iK3VlWybUE6mcH9B(bh);
      //appendnew_next_getTemplates
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z6UAju2mIAwfjmdA');
    }
  }

  sd_8F9N0rhqpyWuVkXW(bh) {
    try {
      bh = this.unsetEmailDataInCache(bh);
      //appendnew_next_sd_8F9N0rhqpyWuVkXW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8F9N0rhqpyWuVkXW');
    }
  }

  //appendnew_flow_emailComposerComponent_start

  ckeditor5BuildClassic(bh) {
    try {
      this.page.Editor = ClassicEditor;
      bh = this.handlebars(bh);
      //appendnew_next_ckeditor5BuildClassic
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zjbnhML5EvkbSSZ5');
    }
  }

  handlebars(bh) {
    try {
      this.page.hb = hb;
      bh = this.importNgForm(bh);
      //appendnew_next_handlebars
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KHEbZmE74b7fycZo');
    }
  }

  importNgForm(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_KkGtRGzwHv6VesoQ(bh);
      //appendnew_next_importNgForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ApveW8IjpKEAuk01');
    }
  }

  sd_KkGtRGzwHv6VesoQ(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.checkedOut = cacheInstance['checkedOut'];
      bh.emailData = cacheInstance['emailComposerData'];
      this.page.newfinfo = cacheInstance['newfinfo'];
      bh = this.setHbVars(bh);
      //appendnew_next_sd_KkGtRGzwHv6VesoQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KkGtRGzwHv6VesoQ');
    }
  }

  setHbVars(bh) {
    try {
      const page = this.page;
      const caseDetails = page.checkedOut.case.caseDetails;
      const owner = caseDetails.owner;
      page.hbVars = {
        data: {},
        inputNames: {
          emailTo: 'emailTo',
          emailCc: 'emailCc',
          emailSubject: 'emailSubject',
          emailTemplates: 'emailTemplates',
        },
        get currentDate() {
          return new Date().toLocaleString();
        },
        payable_items: null,
        payable_amount: 0,
        requiredDocs: {
          questionnaire: page.newfinfo?.requirements?.filter?.(
            (att) => att.category !== 'Medical'
          ),
          medical: page.newfinfo?.requirements?.filter?.(
            (att) => att.category === 'Medical'
          ),
        },
        case: page.checkedOut.case,
        caseDetails: {
          fna: {
            firstName: 'Suresh',
            lastName: 'Chandrashekharan',
            name: owner.PersonalDetails.fullName,
            address: '58 Coetsee James street 560100 India',
            phoneNumber: '88800110',
            productName: 'productName',
            PolicyNo: '(APPL12183322 : 39)',
          },
        },
        finfoUrl: page.newfinfo
          ? bh.system.environment.properties.AGENT_UI_APP_URL +
            '/finfo/' +
            page.newfinfo.finfoId
          : undefined,
      };

      page.owner = {
        phoneNumber: owner.residentialAddress.telephone || '-',
        email: owner.residentialAddress.email || '-',
        name: owner.PersonalDetails.fullName || '-',
        sex: owner.PersonalDetails.sex || '-',
        idNumber: owner.PersonalDetails.idNumber || '-',
        idIssueDate: owner.PersonalDetails.idIssueDate || '-',
        idIssuePlace: owner.PersonalDetails.idIssuePlace || '-',
        dob: owner.PersonalDetails.dob || '-',
        age: owner.PersonalDetails.age || '-',
        palceOfBirth: owner.PersonalDetails.palceOfBirth || '-',
        nationality: owner.PersonalDetails.nationality || '-',
        occupation: owner.PersonalDetails.occupation || '-',
        income: owner.PersonalDetails.income || '-',
        applicationNumber: page.checkedOut.case.applicationNumber || '-',
      };
      bh = this.createFormGroup(bh);
      //appendnew_next_setHbVars
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8gi0gvOAeaNajnqH');
    }
  }

  createFormGroup(bh) {
    try {
      const page = this.page;
      const caseDetails = page.checkedOut.case.caseDetails;
      const owner = caseDetails.owner;
      const email = owner.residentialAddress.email;
      page.emailForm = page.fb.group({
        to: page.fb.control(email || '', [
          Validators.email,
          Validators.required,
        ]),
        cc: page.fb.control('', [Validators.email]),
        subject: page.fb.control('', [Validators.required]),
        body: page.fb.control('', [Validators.required]),
        attachments: page.fb.control([]),
      });
      const attachmentsDocId = bh.emailData?.attachments?.docId;
      const pv = {
        subject: `(${page.checkedOut.case.applicationNumber} : ${page.checkedOut.task.pid})`,
        ...bh.emailData,
        attachments: attachmentsDocId ? [attachmentsDocId] : [],
      };
      if (page.newfinfo) {
        pv.subject = 'Request For Further Information - ' + pv.subject;
      }
      page.emailForm.patchValue(pv);
      bh = this.sd_MfjFHtW6tuZm9MVI(bh);
      //appendnew_next_createFormGroup
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zlifqykPPY1sPkyM');
    }
  }

  async sd_MfjFHtW6tuZm9MVI(bh) {
    try {
      const promiseArray = [
        this.getTemplates(),
        this.__serviceInvoker__.invoke(
          'sd_jkXaNKtzX8iSR5cy',
          'getCaseDocsForCaseId',
          this.page.checkedOut.case._id
        ),
      ];
      bh.results = await Promise.all(promiseArray);
      bh = this.sd_qrfJx17XsbhhKi0a(bh);
      //appendnew_next_sd_MfjFHtW6tuZm9MVI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MfjFHtW6tuZm9MVI');
    }
  }

  sd_qrfJx17XsbhhKi0a(bh) {
    try {
      this.page.caseDocuments = bh.results[1]?.local.result?.documents;
      //appendnew_next_sd_qrfJx17XsbhhKi0a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qrfJx17XsbhhKi0a');
    }
  }

  sd_FGg8Y3OA9Gu3SBbR(bh) {
    try {
      const page = this.page;
      const template = page.templates.find(
        (t) => t.templateName === bh.input.value
      )?.template;
      if (template) {
        const parseFn = page.hb.compile(template, { strict: false });
        const result = parseFn(page.hbVars);
        page.emailForm.get('body').setValue(result);
      }
      //appendnew_next_sd_FGg8Y3OA9Gu3SBbR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FGg8Y3OA9Gu3SBbR');
    }
  }

  prepareHttpBody(bh) {
    try {
      const page = this.page;
      bh.data = {
        email: {
          ...page.emailForm.value,
          finfoId: page.newfinfo?.finfoId || page.newfinfo?._id,
          attachments: page.caseDocuments.filter((d) =>
            page.emailForm.value.attachments.includes(d._id)
          ),
        },
        // finfo: page.newfinfo
      };
      console.log('bh.body', bh.body);

      bh = this.callCsdSendEmail(bh);
      //appendnew_next_prepareHttpBody
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qKbPqe4CGEcpgWdR');
    }
  }

  async callCsdSendEmail(bh) {
    try {
      const emailServiceInstance: emailService =
        this.__page_injector__.get(emailService);

      let outputVariables = await emailServiceInstance.sendEmail(
        bh.data,
        this.page.checkedOut.task.pid
      );

      bh = this.closeRsn(bh);
      bh = this.emitFetchSentEmails(bh);
      //appendnew_next_callCsdSendEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9ybeOTGclM6TZ7My');
    }
  }

  closeRsn(bh) {
    try {
      bh.system.pubsubService.$pub('close-rsn', bh);
      //appendnew_next_closeRsn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2fpMThtJT1Mmqln9');
    }
  }

  emitFetchSentEmails(bh) {
    try {
      bh.system.pubsubService.$pub('fetch-sent-emails', bh);
      //appendnew_next_emitFetchSentEmails
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ogOI9SQSVoHOKCh0');
    }
  }

  sd_iK3VlWybUE6mcH9B(bh) {
    try {
      const page = this.page;
      bh.url = `${bh.system.environment.properties.ssdBaseUrl}/correspondence/email/templates`;
      bh = this.sd_1gwqRIjSfeoWxNW9(bh);
      //appendnew_next_sd_iK3VlWybUE6mcH9B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iK3VlWybUE6mcH9B');
    }
  }

  async sd_1gwqRIjSfeoWxNW9(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.templates = await this.sdService.nHttpRequest(requestOptions);
      bh = this.checkNewfinfo(bh);
      //appendnew_next_sd_1gwqRIjSfeoWxNW9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1gwqRIjSfeoWxNW9');
    }
  }

  checkNewfinfo(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          this.page.newfinfo,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.selectFinfoAsTemplate(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ol4eEOpxazpDc1Vc');
    }
  }

  selectFinfoAsTemplate(bh) {
    try {
      const page = this.page;
      page.selectedTemplate = 'NBPR';
      bh = this.sd_MzEMNPW0l5BzIbx6(bh);
      //appendnew_next_selectFinfoAsTemplate
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XkoWSSCXwiw11pxc');
    }
  }

  sd_MzEMNPW0l5BzIbx6(bh) {
    try {
      let outputVariables = this.selectTemplate(this.page.selectedTemplate);

      //appendnew_next_sd_MzEMNPW0l5BzIbx6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MzEMNPW0l5BzIbx6');
    }
  }

  unsetEmailDataInCache(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      cacheInstance['emailComposerData'] = null;
      cacheInstance['newfinfo'] = null;
      //appendnew_next_unsetEmailDataInCache
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BRRe58nwN5kpxkYJ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_8F9N0rhqpyWuVkXW(bh);
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
  //appendnew_flow_emailComposerComponent_Catch
}
