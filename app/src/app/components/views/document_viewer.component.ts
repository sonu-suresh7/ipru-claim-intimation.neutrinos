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
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-document_viewer',
  templateUrl: './document_viewer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class document_viewerComponent {
  @Input('document')
  public document: any = undefined;
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
      this.sd_n2HzlubeWMxuKzxx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_n2HzlubeWMxuKzxx(bh) {
    try {
      bh = this.sd_9ny9MYnFK6quBl9x(bh);
      //appendnew_next_sd_n2HzlubeWMxuKzxx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n2HzlubeWMxuKzxx');
    }
  }

  //appendnew_flow_document_viewerComponent_start

  sd_9ny9MYnFK6quBl9x(bh) {
    try {
      this.page.dialogData = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_MTcrQKaEcW3w6XJv(bh);
      //appendnew_next_sd_9ny9MYnFK6quBl9x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9ny9MYnFK6quBl9x');
    }
  }

  sd_MTcrQKaEcW3w6XJv(bh) {
    try {
      const page = this.page;
      page.documentResult = page.dialogData?.documentResult;
      page.pdf = page.dialogData?.pdf;
      if (page.documentResult?.classification?.[0]?.tag_name) {
        page.documentLabel = page.documentResult?.classification[0]?.tag_name;
        page.confidence = page.documentResult?.classification[0]?.confidence;
      }
      //appendnew_next_sd_MTcrQKaEcW3w6XJv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MTcrQKaEcW3w6XJv');
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
  //appendnew_flow_document_viewerComponent_Catch
}
