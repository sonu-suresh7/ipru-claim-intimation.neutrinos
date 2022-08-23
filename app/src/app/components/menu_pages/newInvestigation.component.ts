/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { investigation } from 'app/sd-services/investigation'; //_splitter_
import { caseService } from 'app/sd-services/caseService'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { confirmation_dialogComponent } from '../other_policies_components/confirmation_dialog.component'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-newInvestigation',
  templateUrl: './newInvestigation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class newInvestigationComponent {
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
    sessionStorage.removeItem('claimantObj')

    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_RFWomKNWLj6SafqT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RFWomKNWLj6SafqT(bh) {
    try {
      bh = this.sd_xc8KxIxpJjk88mRX(bh);
      //appendnew_next_sd_RFWomKNWLj6SafqT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RFWomKNWLj6SafqT');
    }
  }

  policyDetails(policy_details: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { policy_details: policy_details };
      bh.local = {};
      bh = this.sd_m7Xbx5XmPd1pR20y(bh);
      //appendnew_next_policyDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L3maMRC4IeWcXQO8');
    }
  }

  isValidPolicy(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { isValid: undefined };
      bh = this.sd_KhkyUXMy0f5aKRXx(bh);
      //appendnew_next_isValidPolicy
      return bh.local.isValid;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VAUBQ2NLTt0jNav8');
    }
  }

  onDocumentChange(document: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { document: document };
      bh.local = {};
      bh = this.sd_vlw38ZysYeYdf3Pf(bh);
      //appendnew_next_onDocumentChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yAPhVnTinK0ZL6MC');
    }
  }

  submit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.getSelectedInvestigation_types(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VRhkQVEIQS4As1sD');
    }
  }

  onInvestigationDataChange(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = {};
      bh = this.sd_CmzFlIQH4wFRdXsx(bh);
      //appendnew_next_onInvestigationDataChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YnDWwGZnuC2xcENQ');
    }
  }

  validateform(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TGnSoYU6jkaI2GRj(bh);
      //appendnew_next_validateform
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8fjFfjjSBcUSq28L');
    }
  }

  convertXmldataToXmlBlob(xml: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { xml: xml };
      bh.local = { blob: undefined };
      bh = this.sd_VUUz860h3XtQGSlU(bh);
      //appendnew_next_convertXmldataToXmlBlob
      return bh.local.blob;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4I9UhWkB9b3I47XW');
    }
  }

  getCheckedList(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { result: undefined };
      bh = this.sd_6Z1yXAnaiFjC2Thw(bh);
      //appendnew_next_getCheckedList
      return bh.local.result;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QAp4ZMmFCjsGhdJ7');
    }
  }

  onInvestigatorSelectionChange(investigator: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { investigator: investigator };
      bh.local = {};
      bh = this.sd_A0ldDzh3RbsTOqOH(bh);
      //appendnew_next_onInvestigatorSelectionChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_trIK0S2hqAeLqcBM');
    }
  }

  ticketCreationMessage(ticket_no: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { ticket_no: ticket_no };
      bh.local = {};
      bh = this.sd_XLMtmMO5alyOMTAH(bh);
      //appendnew_next_ticketCreationMessage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q2Hv0PS8HSh66KAP');
    }
  }

  cancel(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_YmUfR0N6VznZ4YVZ(bh);
      //appendnew_next_cancel
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wFEfRrbtsGNWL7Hf');
    }
  }

  getInvestigationTypes(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { investigation_types: undefined };
      bh = this.sd_K7JMPHDeIbgzJyqT(bh);
      //appendnew_next_getInvestigationTypes
      return bh.local.investigation_types;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_86mf0nkUT5YmXii5');
    }
  }

  //appendnew_flow_newInvestigationComponent_start

  sd_xc8KxIxpJjk88mRX(bh) {
    try {
      this.page.policy_details = {};
      this.page.document = [];
      this.page.investigation_types = undefined;
      this.page.isValid = false;
      this.page.investigator = undefined;
      bh = this.sd_4xNorjh7X0HJKwbj(bh);
      //appendnew_next_sd_xc8KxIxpJjk88mRX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xc8KxIxpJjk88mRX');
    }
  }

  async sd_4xNorjh7X0HJKwbj(bh) {
    try {
      const investigationInstance: investigation =
        this.__page_injector__.get(investigation);

      let outputVariables = await investigationInstance.getInvestigationTypes();
      this.page.investigation_types = outputVariables.local.investigation_types;

      //appendnew_next_sd_4xNorjh7X0HJKwbj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4xNorjh7X0HJKwbj');
    }
  }

  sd_m7Xbx5XmPd1pR20y(bh) {
    try {
      const page = this.page;
      page.policy_details = bh.input.policy_details;
      console.log(page.policy_details);
      //appendnew_next_sd_m7Xbx5XmPd1pR20y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m7Xbx5XmPd1pR20y');
    }
  }

  sd_KhkyUXMy0f5aKRXx(bh) {
    try {
      const page = this.page;
      bh.local.isValid =
        page?.policy_details && !!Object.keys(page.policy_details).length;
      //appendnew_next_sd_KhkyUXMy0f5aKRXx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KhkyUXMy0f5aKRXx');
    }
  }

  sd_vlw38ZysYeYdf3Pf(bh) {
    try {
      const page = this.page;
      page.document = bh.input.document;
      bh = this.sd_mg42fG8KhMUCrxY2(bh);
      //appendnew_next_sd_vlw38ZysYeYdf3Pf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vlw38ZysYeYdf3Pf');
    }
  }

  sd_mg42fG8KhMUCrxY2(bh) {
    try {
      let outputVariables = this.validateform();

      //appendnew_next_sd_mg42fG8KhMUCrxY2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mg42fG8KhMUCrxY2');
    }
  }

  getSelectedInvestigation_types(bh) {
    try {
      let outputVariables = this.getInvestigationTypes();
      bh.local.investigation_types = outputVariables;

      bh = this.sd_AqZbw4iu5rxk1dG4(bh);
      //appendnew_next_getSelectedInvestigation_types
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7VDOXvmjYv3fw2ba');
    }
  }

  sd_AqZbw4iu5rxk1dG4(bh) {
    try {
      const page = this.page;
      console.log(page.document, page.investigation_types, page.policy_details);
      bh = this.getChecklist(bh);
      //appendnew_next_sd_AqZbw4iu5rxk1dG4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AqZbw4iu5rxk1dG4');
    }
  }

  getChecklist(bh) {
    try {
      let outputVariables = this.getCheckedList();
      bh.checklist = outputVariables;

      bh = this.sd_L4wK3ioJXOoxWfdv(bh);
      //appendnew_next_getChecklist
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0MOdveQ9UH4F5zbB');
    }
  }

  sd_L4wK3ioJXOoxWfdv(bh) {
    try {
      const page = this.page;
      bh.uid = () => Math.floor(Math.random() * 10000000 + 1);

      bh.prepareXMLData = {
        CASE_ID: bh.uid(),
        CLIENT_NUMBER: page.policy_details.policy.policyOwnerId,
        DATE_OF_BIRTH: page.policy_details.proposer.birthdate,
        GENDER: page.policy_details.proposer.gender,
        MAIN_BENEFIT_SUM_ASSURED: page.policy_details.policy.sumAssured,
        POLICY_NUMBER: page.policy_details.policy.policyNumber,
        PREMIUM: 100000,
        PREMIUM_CURRENT_POLICY: 100000,
        LIFE_AGE: page.policy_details.lifeAssured.birthdate,
        INVESTIGATION_TYPES: bh.local.investigation_types,
      };
      bh = this.getXmlData(bh);
      //appendnew_next_sd_L4wK3ioJXOoxWfdv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L4wK3ioJXOoxWfdv');
    }
  }

  async getXmlData(bh) {
    try {
      const investigationInstance: investigation =
        this.__page_injector__.get(investigation);

      let outputVariables = await investigationInstance.getXmlTemplate(
        bh.prepareXMLData.CASE_ID,
        bh.prepareXMLData.CLIENT_NUMBER,
        bh.prepareXMLData.DATE_OF_BIRTH,
        bh.prepareXMLData.GENDER,
        bh.prepareXMLData.MAIN_BENEFIT_SUM_ASSURED,
        bh.prepareXMLData.POLICY_NUMBER,
        bh.prepareXMLData.PREMIUM,
        bh.prepareXMLData.PREMIUM_CURRENT_POLICY,
        bh.checklist,
        this.page.investigator,
        bh.prepareXMLData.LIFE_AGE,
        bh.prepareXMLData.INVESTIGATION_TYPES
      );
      bh.xml_data = outputVariables.local.template;

      bh = this.prepareFormDataToSubmit(bh);
      //appendnew_next_getXmlData
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6A6p0VPnZqk73x85');
    }
  }

  prepareFormDataToSubmit(bh) {
    try {
      const page = this.page;
      bh.url = `${page.system.environment.properties.ssdBaseUrl}/case/start`;
      bh.formdata = new FormData();
      // bh.formdata.append('xml', bh.blob, `investigation_${bh.uid()}.xml`);
      page.document.forEach((file) => {
        bh.formdata.append('attachment', file, file.name);
      });
      bh.formdata.append('applicationForm', bh.xml_data);

      bh = this.triggerProcessStart(bh);
      //appendnew_next_prepareFormDataToSubmit
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y6wY6lTleUWmQOPC');
    }
  }

  async triggerProcessStart(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.formdata,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.callExtraVariablesApi(bh);
      //appendnew_next_triggerProcessStart
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JCQfNqVTZuit8O0K');
    }
  }

  callExtraVariablesApi(bh) {
    try {
      const page = this.page;
      page.newPid = bh.result.payload;
      bh = this.showMessage(bh);
      bh = this.sd_UNL0IvQf4gXNFiog(bh);
      //appendnew_next_callExtraVariablesApi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jG9PG7cIN0DTBjwa');
    }
  }

  showMessage(bh) {
    try {
      let outputVariables = this.ticketCreationMessage(bh.result.payload);

      //appendnew_next_showMessage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MUlcTPary1rYNYDN');
    }
  }

  sd_UNL0IvQf4gXNFiog(bh) {
    try {
      const page = this.page;
      if (page.newPid) {
        page.newPid = Number(page.newPid);
      }
      let claimantObj = sessionStorage.getItem('claimantObj');
      claimantObj = JSON.parse(claimantObj);
      bh.local.payload = {
        pid: page.newPid,
        claimantObj: claimantObj,
      };
      
      bh = this.sd_iM4IogpArsF0uSqm(bh);
      //appendnew_next_sd_UNL0IvQf4gXNFiog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UNL0IvQf4gXNFiog');
    }
  }

  async sd_iM4IogpArsF0uSqm(bh) {
    try {
      const caseServiceInstance: caseService =
        this.__page_injector__.get(caseService);

      let outputVariables = await caseServiceInstance.addnewpayload(
        bh.local.payload
      );

      sessionStorage.removeItem('claimantObj')

      //appendnew_next_sd_iM4IogpArsF0uSqm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iM4IogpArsF0uSqm');
    }
  }

  sd_CmzFlIQH4wFRdXsx(bh) {
    try {
      const page = this.page;
      page.investigation_types = bh.input.data;
      bh = this.sd_L8uFOHtvaEQtNYa3(bh);
      //appendnew_next_sd_CmzFlIQH4wFRdXsx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CmzFlIQH4wFRdXsx');
    }
  }

  sd_L8uFOHtvaEQtNYa3(bh) {
    try {
      let outputVariables = this.validateform();

      //appendnew_next_sd_L8uFOHtvaEQtNYa3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L8uFOHtvaEQtNYa3');
    }
  }

  sd_TGnSoYU6jkaI2GRj(bh) {
    try {
      const page = this.page; // page.isValid  = page.investigation_types.some((el) =>
      //           Array.isArray(el.value)
      //             ? el.value.some((obj) =>
      //                 Array.isArray(obj.value)
      //                   ? true
      //                   : false
      //               )
      //             : false
      //         ) && page.document?.length;

      if (page.document?.length && page.investigator) {
        page.isValid = true;
      } else {
        page.isValid = false;
      }
      //appendnew_next_sd_TGnSoYU6jkaI2GRj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TGnSoYU6jkaI2GRj');
    }
  }

  sd_VUUz860h3XtQGSlU(bh) {
    try {
      const page = this.page;
      bh.local.blob = new Blob([bh.input.xml], {
        type: 'application/xhtml+xml',
      });

      //appendnew_next_sd_VUUz860h3XtQGSlU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VUUz860h3XtQGSlU');
    }
  }

  sd_6Z1yXAnaiFjC2Thw(bh) {
    try {
      const page = this.page;
      bh.local.result = [];

      // page.investigation_types.forEach(el => {
      //         if (Array.isArray(el.value) && el.checked) {
      //             el.value.forEach(obj => {
      //                 if(Array.isArray(obj.value) && obj.checked){
      //                     obj.value.forEach(list=>{
      //                         if(list.checked){
      //                             bh.local.result.push(list.value)
      //                         }
      //                     })
      //                 }
      //             });
      //         }
      //     })

      let checkList = sessionStorage.getItem('checklist');
      if (checkList) {
        checkList = JSON.parse(checkList);
        bh.local.result = checkList;
      }

      //appendnew_next_sd_6Z1yXAnaiFjC2Thw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6Z1yXAnaiFjC2Thw');
    }
  }

  sd_A0ldDzh3RbsTOqOH(bh) {
    try {
      const page = this.page;
      page.investigator = bh.input.investigator;
      bh = this.sd_yENM7ssHs7S9jEjc(bh);
      //appendnew_next_sd_A0ldDzh3RbsTOqOH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A0ldDzh3RbsTOqOH');
    }
  }

  sd_yENM7ssHs7S9jEjc(bh) {
    try {
      let outputVariables = this.validateform();

      //appendnew_next_sd_yENM7ssHs7S9jEjc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yENM7ssHs7S9jEjc');
    }
  }

  sd_XLMtmMO5alyOMTAH(bh) {
    try {
      const page = this.page;
      bh.local.data = {
        title: 'New Ticket Created',
        message: `A ticket has been created for your request, the Ticket no. is : <strong> ${bh.input.ticket_no} </strong>`,
        icon: 'close',
      };
      bh = this.displayCreateTicketSuccessDialog(bh);
      //appendnew_next_sd_XLMtmMO5alyOMTAH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XLMtmMO5alyOMTAH');
    }
  }

  displayCreateTicketSuccessDialog(bh) {
    try {
      const confirmation_dialogDialog = this.__page_injector__.get(MatDialog);
      const confirmation_dialogDialogRef = confirmation_dialogDialog.open(
        confirmation_dialogComponent,
        { data: bh.local.data, disableClose: true }
      );
      confirmation_dialogDialogRef.afterClosed().subscribe((event) => {
        this.page = event;
        this.sd_MvbCgcuc8GggEVNo(bh);

        //appendnew_next_displayCreateTicketSuccessDialog;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aGFYdt8lmUgAR0Ld');
    }
  }

  async sd_MvbCgcuc8GggEVNo(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/web/nav/workqueue');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_MvbCgcuc8GggEVNo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MvbCgcuc8GggEVNo');
    }
  }

  async sd_YmUfR0N6VznZ4YVZ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/web/nav/workqueue');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_YmUfR0N6VznZ4YVZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YmUfR0N6VznZ4YVZ');
    }
  }

  sd_K7JMPHDeIbgzJyqT(bh) {
    try {
      const page = this.page;
      bh.local.investigation_types = [];
      page.investigation_types.forEach((el) => {
        if (Array.isArray(el.value) && el.checked) {
          bh.local.investigation_types.push(el.type);
        }
      });

      let sourceOfBusiness = sessionStorage.getItem('sourceOfBusiness');

      if (sourceOfBusiness) {
        bh.local.investigation_types.push(sourceOfBusiness);
      }
      //appendnew_next_sd_K7JMPHDeIbgzJyqT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K7JMPHDeIbgzJyqT');
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
  //appendnew_flow_newInvestigationComponent_Catch
}
