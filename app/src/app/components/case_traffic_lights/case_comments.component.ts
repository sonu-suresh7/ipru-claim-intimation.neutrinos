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
import { commentService } from 'app/sd-services/commentService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-case_comments',
  templateUrl: './case_comments.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class case_commentsComponent {
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
      this.sd_dVqCFoCkh5Uhhd0x(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dVqCFoCkh5Uhhd0x(bh) {
    try {
      bh = this.sd_utcbQRHOcjeCij8V(bh);
      //appendnew_next_sd_dVqCFoCkh5Uhhd0x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dVqCFoCkh5Uhhd0x');
    }
  }

  insert(comment: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { comment: comment };
      bh.local = {};
      bh = this.sd_zscCajNqDekFe8wn(bh);
      //appendnew_next_insert
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OrjSx6Ie3Axu7g6N');
    }
  }

  //appendnew_flow_case_commentsComponent_start

  sd_utcbQRHOcjeCij8V(bh) {
    try {
      bh = this.getAllComments(bh);
      //appendnew_next_sd_utcbQRHOcjeCij8V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_utcbQRHOcjeCij8V');
    }
  }

  async getAllComments(bh) {
    try {
      const commentServiceInstance: commentService =
        this.__page_injector__.get(commentService);

      let outputVariables = await commentServiceInstance.getAllComments();
      this.page.comments = outputVariables.local.result;

      bh = this.sd_LvKNOT32DXcUsOeZ(bh);
      //appendnew_next_getAllComments
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sF1U8QAvWbMbRBcM');
    }
  }

  sd_LvKNOT32DXcUsOeZ(bh) {
    try {
      const page = this.page;
      console.log('comments', page.comments);
      //appendnew_next_sd_LvKNOT32DXcUsOeZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LvKNOT32DXcUsOeZ');
    }
  }

  async sd_zscCajNqDekFe8wn(bh) {
    try {
      const commentServiceInstance: commentService =
        this.__page_injector__.get(commentService);

      let outputVariables = await commentServiceInstance.insertComment(
        bh.input.comment
      );

      bh = this.sd_nEJExOJMsAAUTBZK(bh);
      //appendnew_next_sd_zscCajNqDekFe8wn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zscCajNqDekFe8wn');
    }
  }

  async sd_nEJExOJMsAAUTBZK(bh) {
    try {
      const commentServiceInstance: commentService =
        this.__page_injector__.get(commentService);

      let outputVariables = await commentServiceInstance.getAllComments();
      this.page.comments = outputVariables.local.result;

      bh = this.clearCommentInput(bh);
      //appendnew_next_sd_nEJExOJMsAAUTBZK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nEJExOJMsAAUTBZK');
    }
  }

  clearCommentInput(bh) {
    try {
      const page = this.page;
      page.newComment = '';
      //appendnew_next_clearCommentInput
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lwbz60Xmh29yvKCu');
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
  //appendnew_flow_case_commentsComponent_Catch
}
