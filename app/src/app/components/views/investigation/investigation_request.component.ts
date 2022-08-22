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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-investigation_request',
  templateUrl: './investigation_request.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class investigation_requestComponent {
  @Input('investigation_types')
  public investigation_types: any = undefined;
  @Output('onInvestigationDataChange')
  public onInvestigationDataChange: any = new EventEmitter<any>();
  @Output('onInvestigatorSelectionChange')
  public onInvestigatorSelectionChange: any = new EventEmitter<any>();
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
      this.sd_xqepcU75RpoxqyVZ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xqepcU75RpoxqyVZ(bh) {
    try {
      bh = this.sd_0Cr4hbWvC1SCE1eW(bh);
      //appendnew_next_sd_xqepcU75RpoxqyVZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xqepcU75RpoxqyVZ');
    }
  }

  prepareSelectedTypes(
    investigation_data: any = undefined,
    event: any = undefined,
    investigation_type: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {
        investigation_data: investigation_data,
        event: event,
        investigation_type: investigation_type,
      };
      bh.local = {};
      bh = this.sd_XXA8A0sBT6zfVfDW(bh);
      //appendnew_next_prepareSelectedTypes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fXPE32ZIngyx7yO2');
    }
  }

  shouldShowSubtype(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { should_show: undefined };
      bh = this.sd_DT8JBOFs2dKIX8GL(bh);
      //appendnew_next_shouldShowSubtype
      return bh.local.should_show;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j3v4sJ1zFHrDkZSx');
    }
  }

  shouldShowChecklist(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { should_show: undefined };
      bh = this.sd_7P7xJtPulBnKhJR0(bh);
      //appendnew_next_shouldShowChecklist
      return bh.local.should_show;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rRb65OHLZGdSwU74');
    }
  }

  investigatorSelectionChange(index: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { index: index };
      bh.local = {};
      bh = this.sd_ZKr37SFWqETBop1K(bh);
      //appendnew_next_investigatorSelectionChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M3pwOozAT8Q26xLV');
    }
  }

  claimType(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sd_XeOPxTcLUb4HD0nL(bh);
      //appendnew_next_claimType
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nWzOU2LY0lx5SPdq');
    }
  }

  claimantChanges(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_sYAGTXtdOtoLFCPo(bh);
      //appendnew_next_claimantChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8P4yaXh3s8pNIzUe');
    }
  }

  //appendnew_flow_investigation_requestComponent_start

  sd_0Cr4hbWvC1SCE1eW(bh) {
    try {
      this.page.selected_types = {};
      this.page.selected_sub_type = {};
      this.page.selected_checklist = {};
      this.page.investigator = undefined;
      this.page.claimtype = ['Medical', 'Natural', 'Accidental', 'Suicidal'];
      this.page.documentList = undefined;
      bh = this.sd_Zr7vZ52qE3Bj625J(bh);
      //appendnew_next_sd_0Cr4hbWvC1SCE1eW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Cr4hbWvC1SCE1eW');
    }
  }

  async sd_Zr7vZ52qE3Bj625J(bh) {
    try {
      const investigationInstance: investigation =
        this.__page_injector__.get(investigation);

      let outputVariables = await investigationInstance.getInvestigators();
      this.page.investigators = outputVariables.local.result;

      bh = this.sd_IvESlKkJxLqsR2Wg(bh);
      //appendnew_next_sd_Zr7vZ52qE3Bj625J
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Zr7vZ52qE3Bj625J');
    }
  }

  sd_IvESlKkJxLqsR2Wg(bh) {
    try {
      const page = this.page;
      page.documenttype = [
        {
          claimtype: 'Medical',
          docList: [
            'Claim Intimation Form',
            'Policy Document',
            'Death Certificate',
            'Id Proof',
            'Discharge Summary',
            'Doctor’s certificate',
            'Claimants Photo',
          ],
        },
        {
          claimtype: 'Natural',
          docList: [
            'Claim Intimation Form',
            'Policy Document',
            'Death Certificate',
            'Id Proof',
            'Claimants Photo',
          ],
        },
        {
          claimtype: 'Accidental',
          docList: [
            'Claim Intimation Form',
            'Policy Document',
            'Death Certificate',
            'Id Proof',
            'FIR',
            'Post mortem Report ',
            'Claimants Photo',
          ],
        },
        {
          claimtype: 'Suicidal',
          docList: [
            'Claim Intimation Form',
            'Policy Document',
            'Death Certificate',
            'Id Proof',
            'FIR',
            'Post mortem Report ',
            'Claimants Photo',
          ],
        },
      ];
      bh = this.sd_ghkL3zJ9QMRIbI3Z(bh);
      //appendnew_next_sd_IvESlKkJxLqsR2Wg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IvESlKkJxLqsR2Wg');
    }
  }

  sd_ghkL3zJ9QMRIbI3Z(bh) {
    try {
      const page = this.page;
      page.claimantsEmailId = '';
      page.claimantsPhoneNumber = '';
      page.claimantsName = '';

      let caseClaimantObj: any = sessionStorage.getItem('caseClaimantObj');

      if (caseClaimantObj) {
        caseClaimantObj = JSON.parse(caseClaimantObj);
        page.claimantsEmailId = caseClaimantObj.claimantsEmailId;
        page.claimantsPhoneNumber = caseClaimantObj.claimantsPhoneNumber;
        page.claimantsName = caseClaimantObj.claimantsName;
      }

      //appendnew_next_sd_ghkL3zJ9QMRIbI3Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ghkL3zJ9QMRIbI3Z');
    }
  }

  sd_XXA8A0sBT6zfVfDW(bh) {
    try {
      const page = this.page;
      console.log(
        bh.input.investigation_type,
        bh.input.event,
        bh.input.investigation_data
      );
      if (
        !bh.input.event.checked &&
        Array.isArray(bh.input.investigation_data.value)
      ) {
        bh.input.investigation_data.value.forEach((el) => {
          el.checked = false;
          if (Array.isArray(el.value)) {
            el.value.forEach((obj) => (obj.checked = false));
          }
        });
      }

      this.onInvestigationDataChange.emit(this.investigation_types);
      //appendnew_next_sd_XXA8A0sBT6zfVfDW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XXA8A0sBT6zfVfDW');
    }
  }

  sd_DT8JBOFs2dKIX8GL(bh) {
    try {
      const page = this.page;
      bh.local.should_show = this.investigation_types.some((el) => el.checked);
      //appendnew_next_sd_DT8JBOFs2dKIX8GL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DT8JBOFs2dKIX8GL');
    }
  }

  sd_7P7xJtPulBnKhJR0(bh) {
    try {
      const page = this.page;
      bh.local.should_show =
        this.shouldShowSubtype() &&
        this.investigation_types.some((el) =>
          el.value.some((obj) => obj.checked)
        );

      //appendnew_next_sd_7P7xJtPulBnKhJR0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7P7xJtPulBnKhJR0');
    }
  }

  sd_ZKr37SFWqETBop1K(bh) {
    try {
      const page = this.page;
      bh.local.investigator = page.investigators[bh.input.index.value];
      bh = this.sd_Za8bdmOk9IHavRYk(bh);
      //appendnew_next_sd_ZKr37SFWqETBop1K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZKr37SFWqETBop1K');
    }
  }

  sd_Za8bdmOk9IHavRYk(bh) {
    try {
      bh.pageOutput.onInvestigatorSelectionChange.emit(bh.local.investigator);
      //appendnew_next_sd_Za8bdmOk9IHavRYk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Za8bdmOk9IHavRYk');
    }
  }

  sd_XeOPxTcLUb4HD0nL(bh) {
    try {
      const page = this.page;
      page.documentList = [];
      if (bh.input.event.value) {
        bh.local.investigator = bh.input.event.value;
        let list = page.documenttype.find(
          (ele) => ele.claimtype == bh.input.event.value
        );
        page.documentList = list.docList;
        sessionStorage.setItem('checklist', JSON.stringify(page.documentList));

        sessionStorage.setItem('sourceOfBusiness', bh.input.event.value);
      }

      bh = this.sd_v9KLyQYY8chBhVxl(bh);
      //appendnew_next_sd_XeOPxTcLUb4HD0nL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XeOPxTcLUb4HD0nL');
    }
  }

  sd_v9KLyQYY8chBhVxl(bh) {
    try {
      bh.pageOutput.onInvestigatorSelectionChange.emit(bh.local.investigator);
      //appendnew_next_sd_v9KLyQYY8chBhVxl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v9KLyQYY8chBhVxl');
    }
  }

  sd_sYAGTXtdOtoLFCPo(bh) {
    try {
      const page = this.page;
      console.log(this.page);
      let claimantObj = {
        claimantsEmailId: this.page.claimantsEmailId,
        claimantsName: this.page.claimantsName,
        claimantsPhoneNumber: this.page.claimantsPhoneNumber,
      };
      sessionStorage.setItem('claimantObj', JSON.stringify(claimantObj));

      //appendnew_next_sd_sYAGTXtdOtoLFCPo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sYAGTXtdOtoLFCPo');
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
  //appendnew_flow_investigation_requestComponent_Catch
}
