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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirmation_dialog',
  templateUrl: './confirmation_dialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirmation_dialogComponent {
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
      this.sd_fDowhIlOSTw78fRd(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_fDowhIlOSTw78fRd(bh) {
    try {
      bh = this.sd_XTSbWsPuJKkjN1ln(bh);
      //appendnew_next_sd_fDowhIlOSTw78fRd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fDowhIlOSTw78fRd');
    }
  }

  submit(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = {};
      bh = this.sd_4bG4BownJhEdBkVO(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I4n0eB9NG32V4ljy');
    }
  }

  //appendnew_flow_confirmation_dialogComponent_start

  sd_XTSbWsPuJKkjN1ln(bh) {
    try {
      this.page.alertObject = undefined;
      bh = this.sd_VrTOui6hu5IgMzmz(bh);
      //appendnew_next_sd_XTSbWsPuJKkjN1ln
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XTSbWsPuJKkjN1ln');
    }
  }

  sd_VrTOui6hu5IgMzmz(bh) {
    try {
      this.page.alertObject = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_TpXYtsbukA9kL3ob(bh);
      //appendnew_next_sd_VrTOui6hu5IgMzmz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VrTOui6hu5IgMzmz');
    }
  }

  sd_TpXYtsbukA9kL3ob(bh) {
    try {
      const page = this.page;
      if (page.alertObject?.title == 'New Ticket Created') {
        page.alertObject = {
          title: 'Claim Documents Submitted',
          message:
            'Claim Intimation Ref No :' + page.alertObject?.message.slice(64),
          icon: 'close',
        };
      } else {
        page.alertObject;
      }
      //appendnew_next_sd_TpXYtsbukA9kL3ob
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TpXYtsbukA9kL3ob');
    }
  }

  sd_4bG4BownJhEdBkVO(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.input.data);

      //appendnew_next_sd_4bG4BownJhEdBkVO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4bG4BownJhEdBkVO');
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
  //appendnew_flow_confirmation_dialogComponent_Catch
}
