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
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-document_upload',
  templateUrl: './document_upload.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class document_uploadComponent {
  @Output('onDocumentChange')
  public onDocumentChange: any = new EventEmitter<any>();
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
      this.sd_9CvNaAmnU3qna16r(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9CvNaAmnU3qna16r(bh) {
    try {
      bh = this.sd_i7PhJjEZ4ZOLUCHJ(bh);
      //appendnew_next_sd_9CvNaAmnU3qna16r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9CvNaAmnU3qna16r');
    }
  }

  fileChange(files: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { files: files };
      bh.local = {};
      bh = this.sd_MubQRbkyIVWZVhCS(bh);
      //appendnew_next_fileChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8U3hf74cv4u08i4M');
    }
  }

  //appendnew_flow_document_uploadComponent_start

  sd_i7PhJjEZ4ZOLUCHJ(bh) {
    try {
      this.page.documents = [];
      //appendnew_next_sd_i7PhJjEZ4ZOLUCHJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i7PhJjEZ4ZOLUCHJ');
    }
  }

  sd_MubQRbkyIVWZVhCS(bh) {
    try {
      const page = this.page;
      page.documents = [bh.input.files];
      bh = this.sd_H86gilbbSmLn5UvN(bh);
      //appendnew_next_sd_MubQRbkyIVWZVhCS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MubQRbkyIVWZVhCS');
    }
  }

  sd_H86gilbbSmLn5UvN(bh) {
    try {
      bh.pageOutput.onDocumentChange.emit(this.page.documents);
      //appendnew_next_sd_H86gilbbSmLn5UvN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H86gilbbSmLn5UvN');
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
  //appendnew_flow_document_uploadComponent_Catch
}
